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



////////////////////
//  DATA
///////////////////

/*var books = [
  {
    _id: 15,
    title: "The Four Hour Workweek",
    author: "Tim Ferriss",
    image: "https://s3-us-west-2.amazonaws.com/sandboxapi/four_hour_work_week.jpg",
    release_date: "April 1, 2007"
  },
  {
    _id: 16,
    title: "Of Mice and Men",
    author: "John Steinbeck",
    image: "https://s3-us-west-2.amazonaws.com/sandboxapi/of_mice_and_men.jpg",
    release_date: "Unknown 1937"
  },
  {
    _id: 17,
    title: "Romeo and Juliet",
    author: "William Shakespeare",
    image: "https://s3-us-west-2.amazonaws.com/sandboxapi/romeo_and_juliet.jpg",
    release_date: "Unknown 1597"
  }
];


var newBookUUID = 18; */







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
  
  db.Book.find(function(err, books){
    if (err) {
      console.log("index error: " + err);
      res.sendStatus(500);
    }
    res.json(books);
  });
});

// get one book
app.get('/api/books/:id', function (req, res) {
  // find one book by its id
  db.Book.findOne({ _id: req.params.id }, (err, data) => {
    if (err) {
      console.log("Not the book");
    }
    res.json(data); 
  })
});

// create new book
app.post('/api/books', function (req, res) {
  // create new book with form data (`req.body`)
  const newBook = new db.Book({ 
    title: req.body.title,
    author: req.body.author,
    image: req.body.image,
    date: req.body.date, 
  }); 

  newBook.save((err, book) => {
    if (err) {throw err;}
    console.log('Saved ${book.title}!');
    res.json(book);
  

});


  
  
  
  
  
  
  /*console.log('books create', req.body);
  var newBook = req.body;
  newBook._id = newBookUUID++;
  books.push(newBook);
  res.json(newBook);
*/

// update book
app.put('/api/books/:id', function(req,res){
// get book id from url params (`req.params`)
  console.log('books update', req.params);
 console.log('The body is ${req.body}';)
  const bookId = req.params.id;
  // find the index of the book we want to remove

 db.Book.findOneAndUpdate(
  {_id: bookId}, 
  req.body, 
  { new: true }, 
  (err, updateBook) => {
    if (err) {throw err; }
    res.json(updateBook);
  });


 
 
 
 
 
 
  /* var updateBookIndex = books.findIndex(function(element, index) {
    return (element._id === parseInt(req.params.id)); //params are strings
  });
  console.log('updating book with index', deleteBookIndex);
  var bookToUpdate = books[deleteBookIndex];
  books.splice(updateBookIndex, 1, req.params);
  res.json(req.params); */
}); 

// delete book
app.delete('/api/books/:id', function (req, res) {
  // get book id from url params (`req.params`)
  console.log('books delete', req.params);
  const bookId = req.params.id;
  // find the index of the book we want to remove
  db.Book.findOneAndDelete({ _id: bookId }, (err, deletedBook) => {
    if (err) {throw err;}
    res.json(deletedBook);
  });
});





app.listen(process.env.PORT || 3000, function () {
  console.log('Book app listening at http://localhost:3000/');
});
