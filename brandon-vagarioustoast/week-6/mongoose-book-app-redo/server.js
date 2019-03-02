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
app.get("/", function(req, res) {
  res.sendFile("views/index.html", { root: __dirname });
});

// get all books
app.get("/api/books", (req, res) => {
  // send all books as JSON response
  Book.find((err, books) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    }
    res.json(books);
  });
});

// get one book
app.get("/api/books/:id", function(req, res) {
  let id = req.params.id;
  // find one book by its id
  Book.findById({ _id: id }, (err, foundBook) => {
    if (err) console.error(err);
    res.json(foundBook);
  });
});

// create new book
app.post("/api/books", function(req, res) {
  // create new book with form data (`req.body`)
  let newBook = {
    title: req.body.title,
    author: req.body.author
  };

  Book.create(newBook, (err, createdBook) => {
    if (err) console.error(err);
    res.json(createdBook);
  });
});

// update book
app.put("/api/books/:id", function(req, res) {
  // get book id from url params (`req.params`)
  console.log(req.body);
  let id;
  id = req.params.id;
  Book.findOneAndUpdate({ _id: id }, req.body, { new: true });
});

// delete book
app.delete("/api/books/:id", function(req, res) {
  // get book id from url params (`req.params`)
  let bookId = req.params.id;
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Book app listening at http://localhost:3000/");
});
