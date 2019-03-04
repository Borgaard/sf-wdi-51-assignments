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



///////////////////////////BEGIN EDITS/////////////////////////////////
// define a root route: localhost:3000/
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

// get all books
app.get('/api/books', function (req, res) {
  // send all books as JSON response
  db.Book.find()
    // populate fills in the author id with all the author data
    .populate('author')
    .exec(function(err, books){
      if (err) { console.log("index error: " + err); }
      res.json(books);
    });
});

// get one book
app.get('/api/books/:id', function (req, res) {
  // find one book by its id
  db.Book.findOne({_id: req.params.id})
    .populate('author')
    .exec((err,data) => {
      res.json(data);
    })
});

// create new book
app.post('/api/books', function (req, res) {
  // create new book with form data (`req.body`)
  let newBook = new db.Book({
    title: req.body.title,
    image: req.body.image,
    date: req.body.date
  });


  // this code will only add an author to a book if the author already exists
  db.Author.findOne({name: req.body.author}, function(err, author){
    newBook.author = author;
    // add newBook to database
    newBook.save(function(err, book){
      if (err) {
        console.log("create error: " + err);
      }
      console.log("created ", book.title);
      res.json(book);
    });
  });

});
// update book
app.put('/api/books/:id', function(req,res) {
// get book id from url params (`req.params`)
  console.log('books update', req.params);
  console.log(`The body is ${req.body}`);
  let bookId = req.params.id;
  // find the index of the book we want to remove
  db.Book.findOneAndUpdate({_id: bookId}, req.body, {new: true})
    .populate('author')
    .exec((err, updatedBook) => {
      res.json(updatedBook);
  });
});

// delete book
app.delete('/api/books/:id', function (req, res) {
  // get book id from url params (`req.params`)
  console.log('books delete', req.params);
  let bookId = req.params.id;
  // find the index of the book we want to remove
  db.Book.findOneAndRemove({_id: bookId})
    .populate('author')
    .exec(function(err, deletedBook) {
      res.json(deletedBook);
  });
});

////////////////////////END EDITS/////////////////////////////////////



app.listen(process.env.PORT || 3000, function () {
  console.log('Book app listening at http://localhost:3000/');
});
