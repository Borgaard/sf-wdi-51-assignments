// SERVER-SIDE JAVASCRIPT
// Requirements ====================================================
  // applies express to this file/project
const express = require('express');
  // applies bodyParser to this file/project via this variable
const bodyParser = require('body-parser');
  // saves the express functionality in variable app in order to call the express function to create a server
const app = express();


// Data ============================================================
  // adds album data on the server
const albums = [
  {
    title: 'Cupid Deluxe',
    artist: 'Blood Orange',
  },
  {
    title: 'M3LL155X - EP',
    artist: 'FKA twigs',
  },
  {
    title: 'Fake History',
    artist: 'letlive.',
  },
];

  // add taqueria seed data
const taquerias = [
  { name: 'La Taqueria' },
  { name: 'El Farolito' },
  { name: 'Taqueria Cancun' },
];


// Middleware ======================================================
  // serve static content from the "public" directory
  // will be executed for every request to the app.
app.use(express.static(__dirname + '/public'));
  // use body-parser in middleware in order to first parse through the data from the body of a request before it is processed by any succeeding routes or parameters
  // will be executed for every request to the app.
app.use(bodyParser.urlencoded({extended: false}));
  // allow CORS (cross-origin-resource-sharing): reduces security so we can more easily test our code in the browser
app.use((request, respond, next) => {
  respond.header('Access-Control-Allow-Origin', '*');
  respond.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
  // serve static vendor Bootstrap CSS and JS files
app.use(express.static('/vendor'));


// Routes ==========================================================
  // routes HTTP GET request to path with callback function that will send the response 'Hello World!'
app.get('/', (request, response) => {
  // serves index.html on the root route, so when the user first gets to the app/page
  response.sendFile('views/index.html', { root : __dirname});
});

  // route to serve albums data
app.get('/api/albums', (request, response) => {
  // sends a JSON response of the albums object
  response.json(albums);
})

  // route to serve taqueria data
app.get('/api/taquerias', (request, response) => {
  response.json(taquerias);
})


// Parameterized URL ===============================================



// Query Param Routes ==============================================



// Server Start ====================================================
  // in production, use the production environment port, otherwise use 3000 (for development)
  // binds and listens for connections on the specified host and port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Example app listening at http://localhost:3000/');
});
