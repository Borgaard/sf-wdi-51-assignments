// SERVER-SIDE JAVASCRIPT

/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

//require express in our app
const express = require('express');
const bodyParser = require('body-parser');
// importing models module folder
const db = require('./models');

// generate a new express app and call it 'app'
var app = express();

// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));



////////////////////
//  DATA
///////////////////

// this data is hardcoded, you can delete is and we want to replace it with mongoose methods to access db. books
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
// connect models and referencing data in other places

// ROOT route // define a root route: localhost:3000/
app.get('/', (req, res) => {
  res.sendFile('views/index.html' , { root : __dirname});
});


// API route  // READ all books // user makes request and we connect them to the database
app.get('/api/books', (req, res) => {
  // Goal: send all books as JSON response. When someone goes to /api/books we want to get the books and sent them back to the user as a response
  db.Book.find()
  // populate fills in the author id with all the author data
  .populate('author')
  .exec((err, Book) => {
    if (err) {
      console.log(`index error: ${ err }`);
      // send response and sth frontend can work with
      res.sendStatus(500);
    }
    // we send foundBooks as json object back to user
    res.json(Book);
  });
});

// get one book
app.get('/api/books/:id', function (req, res) {
// find one book by its id
  // out books are saved by mongod and oraganised by unique properties so that we can access them. Each object in array had an _id property, so that we can grab that single resource
  // therefore to grab a specific book use _id. Mongoose will automatically find _id, we use parameterised id
  // so when user looks for book, find req, I want them to find the book and respond with data that we found (dataFound)
  db.Book.findOne({ _id: req.params.id })
  .populate('author')
  .exec((err, dataFound) => {
    if(err) {
      console.log(`not what you are looking for..`)
    }
    res.send(dataFound);
  })

  // this code is not needed anymore
  // console.log('books show', req.params);
  // for(var i = 0; i < books.length; i++) {
  //   if (books[i]._id === req.params.id) {
  //     res.json(books[i]);
  //     break; // we found the right book, we can stop searching
  //   }
  // }
});

// my try is not working, see solution code below:
// app.post('/api/books', (req, res) => {
//   let Book = new db.Book({
//       title: req.body.title,
//       author: req.body.author
//   });
//   db.Book.create(req.body, (err, bookCreated) => {
//       if (err) console.log("uups");
//       res.json(bookCreated);
//   });
// });

// create new book // solution code below:
app.post('/api/books', function (req, res) {
  // create new book with form data (`req.body`)
    // make new instance of book model: function that takes object as only argument. that object related direclty to properties that we set up on our book model
  let newBook = new db.Book({
    title: req.body.title,
    author: req.body.author,
    image: req.body.image,
    date: req.body.date
  });
  // find author from req body. This code will only add an author to a book if the author already exists
  db.Author.findOne({name: req.body.author}, function(err, author){
    if (err) console.log(err);
    if (author === null) {
      db.Author.create({
        name: req.body.author,
        alive: true
      }, (err, newAuthor) => {
        newBookAndAuthor(newBook, newAuthor, res);
      });
    } else {
      newBookAndAuthor(newBook, author, res);
    }
  });
});

  function newBookAndAuthor(book, author, res) {
    // add this author to book
    book.author = author;
    // save new book to database // setup create method
    book.save((err, book) => {
      if(err) { throw err; }
      //if success
      console.log(`Saved ${book.title}!`);
      // in app.js we target form input takes json and we respond with json. check app.js code
      res.json(book);
    });
  }



  // this is hardcoded data for when you have the hardcoded book array before that we deleted. therefore we do not need it anymore, because mongoose dynamically creates a book
  // console.log('books create', req.body);
  // var newBook = req.body;
  // newBook._id = newBookUUID++;
  // books.push(newBook);
  // res.json(newBook);


// adding characters to books
app.post('/api/books:book_id/characters', function (req, res){
  // Get book id from url params (`req.params`)
  var bookId = req.params.book_id;
  db.Book.findById(bookId)
    .populate('author')
    .exec(function(err, foundBook) {
      // handle errors
      if(err) return console.log(err)
      console.log(foundBook);
      // push req.body into characters array
      foundBook.characters.push(newCharacter)
      // save the book with the new character
      foundBook.save((err, newBook) => {
        if(err) return console.log(err)

        console.log(newBook);
        
      })
    // send the entire book back
    res.json(foundBook);
  });
});




// updating information. update book with put method. THis is the solution code I could not get this to work:
// app.put('/api/books/:id', (req, res) => {
//   let bookId = req.params.id;
//   db.Book.findOneAndUpdate({ _id: bookId }, req.body, (err, updatedBook) => {
//       if (err) return console.log(err);
//       res.json(updatedBook);
//   });
// });

// solution code:
app.put('/api/books/:id', function(req,res){

  // get book id from url params (`req.params`)
  // console.log('books update', req.params);
  console.log(`the body is ${req.body}`);
  let bookId = req.params.id;
  // find the index of the book we want and update. find book, pass through data that is going to update our book, and we have an optional object called new, that makes sure we create a new record
  // put: updates record and creates a new one
                                        // get updated body information and create a new instance of book once updated
  db.Book.findOneAndUpdate({ _id: bookId} , req.body, {new: true})
  .populate('author')
  .exec((err, updatedBook) => {
      // if(err) console.log("no update");
      // respond with json object of updated book.
      res.json(updatedBook);
    });

// hard coded code for initial array:
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
});

// delete book
app.delete('/api/books/:id', function (req, res) {
  // get book id from url params (`req.params`)
        // tracks id that is passed through req.params
  console.log('books delete', req.params);
  const bookId = req.params.id;
  const characterId = req.params.character_id;

  //update delte with new author 
  db.Book.findById(bookId).populate('author').exec((err, deletedBook) => {
    if (err) return console.log(err);
    // struggeling
  })


  //, find thing you want to remove,then remove. Mongoose combines two steps into 1 with .findOneAndDelete
  // connect to database      bookId we defined above,  we pass function that takes error and deletedBook as arguments
  db.Book.findOneAndDelete({ _id: bookId }, (err, deletedBook) => {
    // deleted action is outside the scenes
    if (err) {throw err;}
    //responding with json because there is front end js in app.js file, that handles frontend behaviour when book is deleted.
    // here we focus on server side. the server always has to respond with sth and the frontend can respond with behavioural action
    res.json(deletedBook);
  });
  
  
  // hardcoded code, we do not need anymore, mongoose gives 
  // find the index of the book we want to remove
  // var deleteBookIndex = books.findIndex(function(element, index) {
  //   return (element._id === parseInt(req.params.id)); //params are strings
  // });
  // console.log('deleting book with index', deleteBookIndex);
  // var bookToDelete = books[deleteBookIndex];
  // books.splice(deleteBookIndex, 1);
  // res.json(bookToDelete);
});





app.listen(process.env.PORT || 3000, function () {
  console.log('Book app listening at http://localhost:3000/');
});
