var db = require('./models')



// server.js
// SERVER-SIDE JAVASCRIPT


/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

//require express in our app
var express = require('express'),
  bodyParser = require('body-parser');

// generate a new express app and call it 'app'
var app = express();

// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));



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

    if (author === null) {
      newBook.author = author;
      newBook.save(function(err, book){
        if (err) {
          console.log("create error: " + err);
        }
        console.log("created ", book.title);
        res.json(book);
      });

    } else {
      newBook.author = author;
      newBook.save(function(err, book){
        if (err) {
          console.log("create error: " + err);
        }
        console.log("created ", book.title);
        res.json(book);
      });

    }
  });

});

app.put('/api/books/:id', function(req,res){
  // get book id from url params (`req.params`)
    const bookId = req.params.id;
  
    db.Book.findOneAndUpdate({_id: bookId},req.body,{new:true},(err,updatedBook)=>{
        if (err) {throw err;}
        res.json(updatedBook);
    });
  
  });

// delete book
app.delete('/api/books/:id', function (req, res) {
  console.log('books delete', req.params);
  const bookId = req.params.id;
  db.Book.findOneAndDelete({_id: bookId},(err,deletedBook)=>{
    if (err) {throw err;}
    res.json(deletedBook);
  });

});


app.listen(process.env.PORT || 3000, function () {
  console.log('Book app listening at http://localhost:3000/');
});
