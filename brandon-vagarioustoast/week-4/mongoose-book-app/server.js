// server.js
// SERVER-SIDE JAVASCRIPT

/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

//require express in our app
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");

// generate a new express app and call it 'app'
const app = express();

// serve static files in public
app.use(express.static("public"));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

// var newBookUUID = 18;

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
  db.Book.find()
    .populate("author")
    .exec((err, books) => {
      if (err) return console.error(err);
      res.json(books);
    });
});

// get one book
app.get("/api/books/:id", (req, res) => {
  // find one book by its id
  db.Book.findOne({ _id: req.params.id }, (err, data) => {
    if (err) {
      console.error(`Not the book you are looking for.`);
    }
    res.json(data);
  });
});

// create new book
app.post("/api/books", (req, res) => {
  // create new book with form data (`req.body`)
  const newBook = new db.Book({
    title: req.body.title,
    author: req.body.author,
    image: req.body.image,
    date: req.body.date
  });

  db.Author.find({ name: req.body.author }, (err, book) => {
    if (err) return console.error(err);
    console.log(book);
  });

  newBook.save((err, book) => {
    if (err) return console.error(err);

    console.log(`Saved: ${book.title}!`);
    res.json(book);
  });
});

// update book
app.put("/api/books/:id", function(req, res) {
  // get book id from url params (`req.params`)
  console.log("books update", req.params);
  console.log(`The body is ${req.body}`);
  const bookId = req.params.id;
  // find the index of the book we want to remove
  db.Book.findOneAndUpdate({ _id: bookId }, req.body, { new: true })
    .populate("author")
    .exec((err, updatedBook) => {
      if (err) console.error(err);
      res.json(updatedBook);
    });
});

// delete book
app.delete("/api/books/:id", function(req, res) {
  // get book id from url params (`req.params`)
  console.log("books delete", req.params);
  const bookId = req.params.id;

  db.Book.findOneAndDelete({ _id: bookId })
    .populate("author")
    .exec((err, deletedBook) => {
      if (err) return console.error(err);
      res.json(deletedBook);
    });
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Book app listening at http://localhost:3000/");
});
