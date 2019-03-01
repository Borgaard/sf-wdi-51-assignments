// server.js
// SERVER-SIDE JAVASCRIPT


/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

//require express in our app
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models')

// generate a new express app and call it 'app'
const app = express();

// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));



// var newBookUUID = 18;




////////////////////
//  ROUTES
///////////////////




// define a root route: localhost:3000/
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

// get all books
app.get('/api/books', (req, res) => {
  // send all books as JSON response
  db.Book.find()
    .populate('author')
    .exec((err, foundBooks) => {
      if (err) { console.log(err)}
      res.json(foundBooks)
    })
});

// get one book
app.get('/api/books/:id', function (req, res) {
  // find one book by its id
  db.Book.findOne({_id: req.params.id})
  .populate('author')
  .exec((err, foundBooks) => {
    if (err) { console.log(err)}
    res.json(foundBooks)
  })
});

// create new book
app.post('/api/books', function (req, res) {
  // create new book with form data (`req.body`)
  const newBook = new db.Book({
    title: req.body.title,
    image: req.body.image,
    date: req.body.date
  });
  // find the author from req.body in Author db
  db.Author.findOne({name: req.body.author}, (err, author) => {
    
    // if the author does not exist, make one
    if (author === null) {
      db.Author.create({name: req.body.author, alive: true}, (err, newAuthor) => {
        // console.log(newAuthor)
        newBook.author = newAuthor; //this statement is not doing anything right now?
        console.log('*****************************')
        console.log(newBook)
        console.log('*****************************')
        if (err) return console.log(err);
        newAuthor.save((err, author) => {
          if (err) return console.log(err)
        })
      })
    } else {
      newBook.author = author;
    }

    // save the new book
    // it doesn't add the author before it adds the book
    newBook.save((err, book) => {
      if (err) {throw err}
      console.log(`Saved ${book.title}! ${book.author.name}`);
      console.log('//////////////////////////////////')
      console.log(newBook)
      console.log('//////////////////////////////////')
      res.json(book);
    })
  })
});

// create a new character
app.post('/api/books/:book_id/characters', function (req, res){
  const bookId = req.params.book_id;
  db.Book.findOne({id: bookId})
  .populate('author')
  .exec((err, foundBook) => {
    if (err) {console.log(err)}
    foundBook.characters.push(req.body)
    foundBook.save((err, book) => {
      if (err) {console.log(err)}
      res.json(book);
    })
  })
})

// update book
app.put('/api/books/:id', function(req,res){
  // get book id from url params (`req.params`)
  console.log('books update', req.params);
  console.log(`The body is ${req.body}`)
  const bookId = req.params.id;
  db.Book.findOneAndUpdate({_id: bookId}, req.body,{new: true})
    .populate('author')
    .exec((err, updatedBook) => {
      if (err) { throw err }
      res.json(updatedBook)
  });
});

// delete book
app.delete('/api/books/:id', function (req, res) {
  // get book id from url params (`req.params`)
  console.log('books delete', req.params);
  const bookId = req.params.id;
  db.Book.findOneAndDelete({_id: bookId})
    .populate('author')
    
    .exec((err, deletedBook) => {
      res.json(deletedBook)
    })
});





app.listen(process.env.PORT || 3000, function () {
  console.log('Book app listening at http://localhost:3000/');
});
