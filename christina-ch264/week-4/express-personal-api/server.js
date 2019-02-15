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
    ChristinaEndpoints: true,
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/ch264/week4/express-personal-api/README.md", //Change to my personal github readme file
    baseUrl: "https://agile-island-65053.herokuapp.com", // Changed to my heroku url
    endpoints: [
      {
        method: "GET", 
        path: "/api", 
        description: "Describes all available endpoints"
      },
      {
        method: "GET", 
        path: "/api/profile", 
        description: "Data about me"
      }, // CHANGE ME
      {
        method: "DELETE", 
        path: "/api/campsites", 
        description: "E.g. Create a new campsite"
      } // CHANGE ME
      {
        method: "PUT", 
        path: "/api/campsites", 
        description: "E.g. Create a new campsite"
      } // CHANGE ME
    ]
  })
});

app.get('/api/profile',(req, res) => {
  res.json({
  social: 'Linkedin'
  })
})

/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Express server is up and running on http://localhost:3000/');
});
