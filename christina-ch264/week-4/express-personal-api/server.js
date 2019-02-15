// require express and other modules
const express = require('express');
const app = express();
const db = require('./models');

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

// const db = require('./models');

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

app.get('/api', (req, res) => {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  // But you should change almost every line of this response.
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/example-username/express-personal-api/README.md", // CHANGE ME
    baseUrl: "http://YOUR-APP-NAME.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, // CHANGE ME
      {method: "GET", path: "/api/book", description: "show favorite books"}, // CHANGE ME
      {method: "GET", path: "/api/book/:id", description: "get a book"} // CHANGE ME

    ]
  })
});

app.get('/api/profile',(req, res) => {
  // res.send('Welcome to my profile'),
  res.json({
    name: 'Christina Hastenrath',
    githubUsername: 'ch264',
    githubLink: 'https://github.com/ch264',
    githubProfileImage: 'https://github.com/settings/profile',
    linkedIn: 'https://www.linkedin.com/in/christinahastenrath/',
    facebook: 'https://www.facebook.com' ,
    currentCity: 'San Francisco',
    pets: [
      {
      name: 'Bella',
      type: 'PetRabbit',
      breed: 'dutch short hair'
      },
      {
        name: 'Emma',
        type: 'dog',
        breed: 'Springer Spaniel'
      }
  ]
  });
});

// app.get('/api/picture', (req, res) => {
//   res.sendFile('FBprofile.jpeg', { root: path.join(__dirname, '/public') });
// });

// get all books READ CRUD
  app.get('/api/book', (req, res) => {
    db.Book.find({}, (err, foundBooks) => {
      if (err) return console.log(err);
      res.json(foundBooks);
    });
  });







app.get('/api/book/:id', (req, res) => {
  db.Book.findOneAndDelete({
    _id: req.params.id
  }, (err, foundBook) => {
    res.json(foundBook);
  })
});

// create new book
app.post('/api/book', function (req, res) {
  // create new book with form data (`req.body`)
  console.log('create this book', req.body);
  var newBook = req.body;
  newBook._id = newBookUUID++;
  books.push(newBook);
  res.json(newBook);
});

/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Express server is up and running on http://localhost:3000/');
});
