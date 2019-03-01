// server.js
// SERVER-SIDE JAVASCRIPT


/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

//require express in our app
const express = require('express');
const bodyParser = require('body-parser');

// generate a new express app and call it 'app'
const app = express();

const db = require('./models')

// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));



////////////////////
//  DATA
///////////////////

//deleted hard-coded books array
// var books = [
//   {
//     _id: 15,
//     title: "The Four Hour Workweek",
//     author: "Tim Ferriss",
//     image: "https://s3-us-west-2.amazonaws.com/sandboxapi/four_hour_work_week.jpg",
//     release_date: "April 1, 2007"
//   },
//   {
//     _id: 16,
//     title: "Of Mice and Men",
//     author: "John Steinbeck",
//     image: "https://s3-us-west-2.amazonaws.com/sandboxapi/of_mice_and_men.jpg",
//     release_date: "Unknown 1937"
//   },
//   {
//     _id: 17,
//     title: "Romeo and Juliet",
//     author: "William Shakespeare",
//     image: "https://s3-us-west-2.amazonaws.com/sandboxapi/romeo_and_juliet.jpg",
//     release_date: "Unknown 1597"
//   }
// ];


// var newBookUUID = 18;


////////////////////
//  ROUTES
///////////////////




// define a root route: localhost:3000/
app.get('/', (req, res) => {
  res.sendFile('views/index.html' , { root : __dirname});
});

// get all books
app.get('/api/books', (req, res) => {
  // send all books as JSON response
  db.Book.find( (err, books) => {
    if (err) {
      console.log("index error: " + err);
      res.sendStatus(500);
    }
    res.json(books);
  });
});

// get one book
// app.get('/api/books/:id', function (req, res) {
//   // find one book by its id
//   console.log('books show', req.params);
//   for(var i=0; i < books.length; i++) {
//     if (books[i]._id === req.params.id) {
//       res.json(books[i]);
//       break; // we found the right book, we can stop searching
//     }
//   }
// });
app.get('/api/books/:id', (req, res) => {
  db.Book.find({_id: req.params.id}, (error, books) => {
    res.json(books);
  }); 
});

// create new book
// app.post('/api/books', function (req, res) {
//   // create new book with form data (`req.body`)
//   console.log('books create', req.body);
//   var newBook = req.body;
//   newBook._id = newBookUUID++;
//   books.push(newBook);
//   res.json(newBook);
// });
app.post('/api/books', (req, res) => {
  var newBook = new db.Books({
    title: req.body.title,
    author: req.body.author,
    image: req.body.image,
    releaseDate: req.body.releaseDate
  });
  newBook.save((error, book) => {
    console.log(newBook);
    
    res.json(book);
  });
});

// update book
// app.put('/api/books/:id', function(req,res){
// // get book id from url params (`req.params`)
//   console.log('books update', req.params);
//   var bookId = req.params.id;
//   // find the index of the book we want to remove
//   var updateBookIndex = books.findIndex(function(element, index) {
//     return (element._id === parseInt(req.params.id)); //params are strings
//   });
//   console.log('updating book with index', deleteBookIndex);
//   var bookToUpdate = books[deleteBookIndex];
//   books.splice(updateBookIndex, 1, req.params);
//   res.json(req.params);
// });

app.put('/api/books/:id', (req,res) => {
  // get book id from url params (`req.params`)
    console.log('books update', req.params);
    console.log(`the body is${req.body}`);
    const bookId = req.params.id;
    // find the index of the book we want to remove
    db.Book.findOneAndUpdate(
      {_id:bookId},
      req.body,
      {new: true},
      (err, updatedBook) => {
        if(err) {throw err;}
        res.json(updatedBook);
      });
  });

// delete book
// app.delete('/api/books/:id', function (req, res) {
//   // get book id from url params (`req.params`)
//   console.log('books delete', req.params);
//   var bookId = req.params.id;
//   // find the index of the book we want to remove
//   var deleteBookIndex = books.findIndex(function(element, index) {
//     return (element._id === parseInt(req.params.id)); //params are strings
//   });
//   console.log('deleting book with index', deleteBookIndex);
//   var bookToDelete = books[deleteBookIndex];
//   books.splice(deleteBookIndex, 1);
//   res.json(bookToDelete);
// });

app.delete('/api/books/:id', function (req, res) {
  // get book id from url params (`req.params`)
  
  const bookId = req.params.id;
  console.log('books delete', bookId);
  // find the index of the book we want to remove
  //used to connect to database
  db.Book.findOneAndDelete({_id: bookId}, (err, deletedBook) => {
    if(err) { throw err; }
    res.json(deletedBook);
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Book app listening at http://localhost:3000/');
});
