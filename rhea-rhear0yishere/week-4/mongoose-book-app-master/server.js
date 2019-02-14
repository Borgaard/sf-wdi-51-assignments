// server.js
// SERVER-SIDE JAVASCRIPT


/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////



const db = require('./models');

//require express in our app
const express = require('express');
const bodyParser = require('body-parser');

// generate a new express app and call it 'app'
const app = express();

// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));



////////////////////
//  DATA
///////////////////




// const newBookUUID = 18;



////////////////////
//  ROUTES
///////////////////




// define a root route: localhost:3000/
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

// get all books
app.get('/api/books', (req, res) => {
  db.Book.find((err, foundBooks)=>{
      if(err){
        console.log("Index Error: " + err)
        res.sendStatus(500);
      }
      res.json(foundBooks);
  });
});



// get one book
app.get('/api/books/:id', function (req, res) {
  db.Book.findOne({_id: req.params.id},(err,data) =>{
    if (err){
    console.log("this aint it");
    }
    res.json(data)
    });
  });




// create new book
app.post('/api/books', function (req, res) {

  const newBook = new db.Book({

      title: req.body.title,
      author:req.body.author,
      image:req.body.image,
      date: req.body.date
  });

      newBook.save((err,newBook)=>{
        if(err){throw err;}
        res.json(newBook);
      });
});




// update book
app.put('/api/books/:id', function(req,res){
// get book id from url params (`req.params`)
  console.log('books update', req.params);
  console.log("The Body is " + req.body);
  const bookId = req.params.id;

  db.Book.findOneAndUpdate({_id: bookId},req.body,{new:true},(err,updatedBook)=>{

      if (err) {throw err;}
      res.json(updatedBook);

  });

});





// delete book
app.delete('/api/books/:id', function (req, res) {
  // get book id from url params (`req.params`)
  console.log('books delete', req.params);
  const bookId = req.params.id;
  // find the index of the book we want to remove

  db.Book.findOneAndDelete({_id: bookId},(err,deletedBook)=>{
    if (err) {throw err;}
    res.json(deletedBook);
  });

});





app.listen(process.env.PORT || 5000, function () {
  console.log('Book app listening at http://localhost:5000/');
});





