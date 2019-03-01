// server.js
// SERVER-SIDE JAVASCRIPT


/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

//require express in our app
const express = require('express'),
bodyParser = require('body-parser');

// generate a new express app and call it 'app'
const app = express();
const db = require('./models');
// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));



////////////////////
//  DATA
///////////////////

var books = [
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


//var newBookUUID = 18;







////////////////////
//  ROUTES
///////////////////




// define a root route: localhost:3000/
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

// get all books
app.get('/api/books',  (req, res) => {
  //send all books as json response
db.Book.find(err, foundbooks => {
  if (err) {
    console.log(`Index Error: $(err)`, () => {
    res.sendStatus(500);
});
res.json(foundBooks);
}});
});
// get one book
app.get('/api/books/:id', function (req, res) {
  db.Book.findOne({ _id: req.params.id }, (err, data) => {
    if (err) {
    console.log("This ain't the book y'all lookin for...");
  }
  res.json(data);
  });
});

// create new book
app.post('/api/books', (req, res) => {
const newBook = new db.Book({
  title: req.body.title,
  author: req.body.author,
  image: req.body.image,
  date: req.body.date,
  });
  newBook.save((err, newBook => {
    if (err) { throw err; }
    console.log('Saved $book.title}!');
    res.json(book);
  }))
});
  

// update book
app.put('/api/books/:id', function(req,res){
// get book id from url params (`req.params`)
  console.log('books update', req.params);
  console.log("The body is $ ")
  const bookId = req.params.id;
db.Book.fiindOneAndUpdate({_id:bookId}, req,body, {new: true }, (err, updateBook)=> {
if(err) {throw err;}
res.json(updatedBook);
})
});

// delete book
app.delete('/api/books/:id', (req, res) => {
  // get book id from url params (`req.params`)
  console.log('books delete', req.params);
  const bookId = req.params.id;
  // find the index of the book we want to remove
 db.Book.findOneAndDelete({_id: bookId}), (err, deletedBook) => {
if (err) {throw err;}
res.json(deletedBook);
};
});





app.listen(process.env.PORT || 3000, function () {
  console.log('Book app listening at http://localhost:3000/');
});
