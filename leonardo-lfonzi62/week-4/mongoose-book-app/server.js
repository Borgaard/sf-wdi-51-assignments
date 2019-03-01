// server.js
// SERVER-SIDE JAVASCRIPT


/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

//require express in our app
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
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
app.get('/api/books',  (req, res) => {
  // send all of our books as a JSON response 
  // find() takes a callback function  err and the objects within the Book database 
  //foundBooks is another name for all the objects in the Books database
  db.Book.find()
  // populate fills in the author id with all the author data
  // populate must come after find(). exec() must be written after that. tried to combine various
  // other methods and failed. 
  .populate('author')
  .exec((err, foundbooks) => {
    if (err) { 
      console.log("index error: " + err); }
    res.json(foundbooks);
  });
});

// get one book
app.get('/api/books/:id', function (req, res) {
  // find one book by its id
  // _id: req.params.id    left side is a auto generated id by mongoose 
  // code is saying that when the user goes to the route above, render the book 
  // that has that specfic id in that route, in the database User would have to know the id beforehand
  let bookId = req.params.id;
  // grabs the id for the browser and then populates the author field with the relavent data 
  db.Book.findOne({ _id: bookId})    
        .populate('author')        
      .exec((err, singleBook ) => {
        res.json(singleBook);
      })

    // .populate()
  // .exec({ _id: bookId}, (err, singleBook) => {
  //   if (err) {
  //     console.log(`This is not the book you are looking for...`);
  //   }
  //   res.json(singleBook);
  // })
});

// create new book
app.post('/api/books', function (req, res) {
  // create new book with form data (`req.body`)
  // new db.Book is using the schema defined in the book.js file
  let newBook = new db.Book({ 
      title: req.body.title,
      image: req.body.image,
      releaseDate: req.body.releaseDate
  })
  // find the author from req.body
  db.Author.findOne({name: req.body.author}, (err, author) =>{
    if (err) {
      return console.log(err);
    }
    // if that author doesn't exist yet, create a new one
    if (author === null) {
      db.Author.create({name:req.body.author, alive:true}, (err, newAuthor) => {
        createBookWithAuthorAndRespondTo(newBook, newAuthor, res);
      });
    } else {
      createBookWithAuthorAndRespondTo(newBook, author, res);
    }
  });
});

function createBookWithAuthorAndRespondTo(book, author, res) {
  // add this author to the book
  book.author = author;
  // save newBook to database
  book.save(function(err, book){
    if (err) {
      return console.log("save error: " + err);
    }
    console.log("saved ", book.title);
    // send back the book!
    res.json(book);
  });
}


// update book
app.put('/api/books/:id', (req, res) => {
  // get book id from url params (`req.params`)
  console.log('books edit', req.params);
  console.log('body is', req.body);
  let bookId = req.params.id;
  // find the index of the book we want to remove
  // req.book gets the book object and allows it be updated
  //new:true executes the change and then returns the updated book
  db.Book.findOneAndUpdate({ _id: bookId }, req.body, {new: true})
    .populate('author')
    .exec((err, updatedBook)=> {
      res.json(updatedBook);
  });
});

// delete book
app.delete('/api/books/:id', (req, res) => {
  // get book id from url params (`req.params`)
  console.log('books delete', req.params);
  let bookId = req.params.id;
  // find the index of the book we want to remove
  db.Book.findOneAndRemove({ _id: bookId })
    .populate('author')
    .exec(function (err, deletedBook) {
      res.json(deletedBook);
  });
});

// Create a character associated with a book
app.post('/api/books/:book_id/characters', (req, res) => {
  // Get book id from url params (`req.params`)
  let bookId = req.params.book_id;
  db.Book.findById(bookId)
    .populate('author')
    .exec((err, foundBook) => {
      console.log(foundBook);
      if (err) {
        res.status(500).json({error: err.message});
      } else if (foundBook === null) {
        // Is this the same as checking if the foundBook is undefined?
        res.status(404).json({error: "No Book found by this ID"});
      } else {
        // push character into characters array
        foundBook.characters.push(req.body);
        // save the book with the new character
        foundBook.save();
        res.status(201).json(foundBook);
      }
    });
});


// Delete a character associated with a book
app.delete('/api/books/:book_id/characters/:character_id', (req, res) => {
  // Get book id from url params (`req.params`)
  let bookId = req.params.book_id;
  let characterId = req.params.character_id;
  db.Book.findById(bookId)
    .populate('author')
    .exec((err, foundBook) => {
      if (err) {
        res.status(500).json({error: err.message});
      } else if (foundBook === null) {
        res.status(404).json({error: "No Book found by this ID"});
      } else {
        // find the character by id
        let deletedCharacter = foundBook.characters.id(characterId);
        // delete the found character
        deletedCharacter.remove();
        // save the found book with the character deleted
        foundBook.save();
        // send back the found book without the character
        res.json(foundBook);
      }
    });
});




app.listen(process.env.PORT || 3000, function () {
  console.log('Book app listening at http://localhost:3000/');
});
