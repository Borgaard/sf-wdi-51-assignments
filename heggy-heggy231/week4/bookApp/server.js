// server.js
// SERVER-SIDE JAVASCRIPT


/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

//require express in our app
const express = require('express');
const bodyParser = require('body-parser');
// same as in seed.js for server.js we need interactive in our app
const db = require('./models');
// generate a new express app and call it 'app'
var app = express();

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
//  goal: get them all book in .json response
app.get('/api/books', (req, res) => {
  // send all books as JSON response
  // first connection of database
  // send all books as JSON response
  //   .find() method gets 2 parameters
  db.Book.find((err, books) => {
    // if err to catch no books are there
    if (err) {
      console.log("Index error: " + err);
      res.sendStatus(500);
    }
    // if books are there: respond with json obj with books argument
    //   send bck to user
    res.json(books);
  });
});

// get one book
//  google "mongoose method find a single resource" > https://mongoosejs.com/docs/queries.html
//  Model.findOne(): https://mongoosejs.com/docs/api.html#model_Model.findOne
//    find one iphone adventures - iphone adventures??
//    Adventure.findOne({ type: 'iphone' }, function (err, adventure) {});
//   go to doc https://mongoosejs.com/docs/models.html
//   
app.get('/api/books/:id', function (req, res) {
  // find one book by its id
  // Adventure.findOne({ type: 'iphone' }, function (err, adventure) {});
  //  mongoose will give you the '/api/books/:id' :id is clue uuid! default create book :id
  //  db.Book.findOne({ id: req.params.id }, (err, data) => {}); data is place holder.  data could be anything it is regards to Book
  //  _id is the format you use for UUID that mongoose saves it under
  db.Book.findOne({ _id: req.params.id }, (err, data) => {
    if (err) {
      console.log("this is not the book you are looking for");
    }
    // if we found the one book then we return the json obj of data argument
    // http://localhost:3000/api/books/5c6468c839b19107802fed46  this function is making us look up for the single book
    res.json(data);
  });

});

// create new book
app.post('/api/books', function (req, res) {
  // create new book with form data (`req.body`)
  // 1. data sent to us 2. grab the data 3. save to our data base
  /*
   * from the model
   const BookSchema = new Schema ({
      title: String,
      author: String,
      image: String,
      date: String
   });

   */
  console.log('req.body', req.body);
  const newBook = new db.Book({
    title: req.body.title,
    author: req.body.author,
    image: req.body.image,
    date: req.body.date
  });
  newBook.save((err, newBook) => {
    if(err){throw err;}
    res.json(newBook);
  });  
});

// update book
//  user needs to provide book /:id as url parma
app.put('/api/books/:id', function(req,res){
// get book id from url params (`req.params`)
  console.log('books update', req.params);
  // what is inside of req.body?
  console.log(`The body is ${req.body}`);
  const bookId = req.params.id;
  // find the index of the book we want to remove
  //  1. find the book we will update, 2. find the data that will update our book, 3. optional obj new: true> creating a new record when updating our record.  put vs patch put whole new entry
  //  req.body = body of request updated information
  //  new: instance of book
  db.Book.findOneAndUpdate(
    { _id: bookId }, 
    req.body, 
    {new: true}, 
    (err, updatedBook) => {
      if (err) { throw err; }
      res.json(updatedBook);
  });
});

// delete book
app.delete('/api/books/:id', function (req, res) {
  // get book id from url params (`req.params`)
  console.log('books delete', req.params);
  const bookId = req.params.id;
  // find the index of the book we want to remove
  //  1) findOneAndDelete({ _id: bookId } find the one to remove
  //     bookId is ^^ above saved!
  db.Book.findOneAndDelete({ _id: bookId }, (err, deletedBook) => {
    if (err) { throw err; }
    res.json(deletedBook);
  });
});





app.listen(process.env.PORT || 3000, function () {
  console.log('Book app listening at http://localhost:3000/');
});
