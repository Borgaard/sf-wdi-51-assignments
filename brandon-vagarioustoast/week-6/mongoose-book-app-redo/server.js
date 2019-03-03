// server.js
// SERVER-SIDE JAVASCRIPT

/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

//require express in our app
const express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose");

// generate a new express app and call it 'app'
const app = express();

// database
const db = require("./models");
const Book = db.Book;
const Author = db.Author;

// serve static files in public
app.use(express.static("public"));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

////////////////////
//  DATA
///////////////////

var newBookUUID = 18;

////////////////////
//  ROUTES
///////////////////

// define a root route: localhost:3000/
app.get("/", (req, res) => {
  res.sendFile("views/index.html", { root: __dirname });
});

// get all books
app.get("/api/books", (req, res) => {
  // send all books as JSON response
  Book.find()
    .populate("author")
    .exec((err, books) => {
      if (err) console.error(err);
      res.json(books);
    });
});

// get one book
app.get("/api/books/:id", (req, res) => {
  let id = req.params.id;
  // find one book by its id
  Book.findById({ _id: id })
    .populate("author")
    .exec((err, foundBook) => {
      if (err) console.error(err);
      res.json(foundBook);
    });
});

// create new book
app.post("/api/books", (req, res) => {
  // create new book with form data (`req.body`)
  let newBook = new Book({
    title: req.body.title,
    image: req.body.image,
    releaseDate: req.body.releaseDate
  });
  Author.findOne({ name: req.body.author }, (err, author) => {
    if (err) console.error(err);
    if (author === null) {
      Author.create(
        { name: req.body.author, alive: true },
        (err, newAuthor) => {
          if (err) console.error(err);
          createBookWithAuthorAndRespondTo(newBook, newAuthor, res);
        }
      );
    } else {
      createBookWithAuthorAndRespondTo(newBook, author, res);
    }
    newBook.author = author;
    // USE THIS ADD TO DATABASE
  });
});

function createBookWithAuthorAndRespondTo(book, author, res) {
  // add this author to the book
  book.author = author;
  // save newBook to database
  book.save(function(err, book) {
    if (err) {
      return console.log("save error: " + err);
    }
    console.log("saved ", book.title);
    // send back the book!
    res.json(book);
  });
}

// add characters to book

app.post("/api/books/:book_id/characters", (req, res) => {
  let bookId = req.params.book_id;
  Book.findById(bookId)
    .populate("author")
    .exec((err, foundBook) => {
      if (err) console.error(err);
      foundBook.characters.push(req.body.characters);
      foundBook.save((err, savedBook) => {
        if (err) console.error(`Error with saved book: ${err}`);
        res.json(savedBook);
      });
    });
});

// update book
app.put("/api/books/:id", (req, res) => {
  // get book id from url params (`req.params`)
  console.log(req.body);
  let id;
  id = req.params.id;
  Book.findOneAndUpdate({ _id: id }, req.body, { new: true })
    .populate("author")
    .exec((err, updatedBook) => {
      if (err) console.error(err);
      res.json(updatedBook);
    });
});

// delete book
app.delete("/api/books/:id", (req, res) => {
  // get book id from url params (`req.params`)
  let bookId = req.params.id;
  Book.findOneAndRemove({ _id: bookId })
    .populate("author")
    .exec((err, deletedBook) => {
      if (err) console.error(err);
      res.json(deletedBook);
    });
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Book app listening at http://localhost:3000/");
});
