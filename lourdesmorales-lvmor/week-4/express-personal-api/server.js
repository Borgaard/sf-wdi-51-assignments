// require express and other modules
const express = require('express');
const app = express();

// parse incoming urlencoded form data
// and populate the req.body object
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

const db = require('./models');

// Profile Endpoint PART 2
const profile = [
  {
    name: "Lou",
    githubUsername: "gitname",
    githubLink: "www.github.com",
    githubProfileImage: "www.img.com",
    personalSiteLink: "www.personalside.com",
    currentCity: "cityName",
    pets: {
        name: "Choco",
        type: "Dog",
        breed: "Boxer"
    }
  }
];

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

 // Documented API Endpoints PART 1
app.get('/api', (req, res) => {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  // But you should change almost every line of this response.
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: false, 
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/example-username/express-personal-api/README.md", // CHANGE ME  
    baseUrl: "https://mysterious-plains-17292.herokuapp.com/", 
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "About me and professional profile"}, 
      {method: "GET", path: "/api/books", description: "Get all books"}, 
      {method: "POST", path: "/api/books", description: "Create a new book"}, 
      {method: "PUT", path: "/api/books/:id", description: "Update a book"},
      {method: "DELETE", path: "/api/books/:id", description: "Delete a book"} 
    ]
  })
});

app.get('/api/profile', (req, res) => {
  res.json(profile);
});

app.get('/api/books', (req, res) => {
  db.Books.find({}, (error, books) => {
    res.json(books);
  }); 
});

app.get('/api/books/:id', (req, res) => {
  db.Books.find({_id: req.params.id}, (error, books) => {
    res.json(books);
  }); 
});

app.post('/api/books', (req, res) => {
  var newBook = new db.Books({
    title: req.body.title,
    author: req.body.author,
    image: req.body.image,
    releaseDate: req.body.releaseDate,
    characters: req.body.characters
  });
  newBook.save((error, book) => {
    console.log(newBook);
    
    res.json(book);
  });
});

// update book
app.put('/api/books/:id', (req,res) => {
// get book id from url params (`req.params`)
  console.log('books update', req.params);
  console.log(`the body is${req.body}`);
  const bookId = req.params.id;
  // find the index of the book we want to remove
  db.Books.findOneAndUpdate(
    {_id:bookId},
    req.body,
    {new: true},
    (err, updatedBook) => {
      if(err) {throw err;}
      res.json(updatedBook);
    });

});

// delete book
app.delete('/api/books/:id', (req, res) => {
  // get book id from url params (`req.params`)
  
  const bookId = req.params.id;
  console.log('books delete', bookId);
  // find the index of the book we want to remove
  //used to connect to database
  db.Books.findOneAndDelete({_id: bookId}, (err, deletedBook) => {
    if(err) { throw err; }
    res.json(deletedBook);
  });
});


/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Express server is up and running on http://localhost:3000/');
});



