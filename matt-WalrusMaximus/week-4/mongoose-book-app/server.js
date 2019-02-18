// server.js
// SERVER-SIDE JAVASCRIPT

/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

//require express in our app
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');

//importing the models folder ^^^^^^

// generate a new express app and call it 'app'
var app = express();

// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));



////////////////////
//  DATA
///////////////////


////////////////////
//  ROUTES
///////////////////

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

// get one book Needs updating
app.get('/api/books/:id', function (req, res) {
  // find one book by its id
    db.Book.findOne({ _id: req.params.id }, (err, data) => {
      if (err)  {
        console.log("this is not the book you're looking for.");
      }
      //don't use an else statment because you may exit out of the if statement
      //and not go into the else statement?
      res.json(data);
    });
});

// create new book
    app.post('/api/books', function (req, res) {
      // create new book with form data (`req.body`)
      var newBook = new db.Book({
        title: req.body.title,
        image: req.body.image,
        releaseDate: req.body.releaseDate,
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

// update book needs to be updated
app.put('/api/books/:id', function(req,res){
// get book id from url params (`req.params`)
  console.log('books update', req.params);
  console.log(`the body is ${req.body}`)
  const bookId = req.params.id;

  db.Book.findOneAndUpdate(
    { _id: bookId},
    req.body,
    {new: true},
    (err, updatedBook) => {
    if (err) {throw err;}
    res.json(updatedBook);
  });
});


// delete book
app.delete('/api/books/:id', function (req, res) {
 console.log('books delete', req.params);
 const bookId = req.params.id;

db.Book.findOneAndDelete( _id = bookId, (err, deletedBook) => {
    if (err) {
      throw err;}
    res.json(deletedBook);
  });
});

  // Create a character associated with a book
  app.post('/api/books/:book_id/characters', function (req, res) {
  // Get book id from url params (`req.params`)
  var bookId = req.params.book_id;
  db.Book.findById(bookId)
    .populate('author') // Reference to author
    // now we can worry about saving that character
    .exec(function(err, foundBook) {
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
    }
  );
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Book app listening at http://localhost:3000/');
});

