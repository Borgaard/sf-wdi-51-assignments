// server.js // SERVER-SIDE JAVASCRIPT

// this is a single file app. It starts a server and listens on port 3000 for connections. the 2 next lines create an Express application. The express() function is a top-level function exported by the express module
const express = require('express');
// initialise variable called app and set it euqal to express function
const app = express();

// setup express app to serve static files in public directory. app use means: use this middleware. make a public folder for static files. 
app.use(express.static('public'));

// Allow CORS (cross origin resource sharing, it is a security protocol): we'll use this today to reduce security so we can more easily test our code in the browser.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// we can also parse jason. we can parse this object out to browser. Parsing objects is how APIs are written
// seed data/ dummy data
const albums = [
  {
    title: 'Cupid Deluxe',
    artist: 'Blood Orange'
  },
  {
    title: 'M3LL155X - EP',
    artist: 'FKA twigs'
  },
  {
    title: 'Fake History',
    artist: 'letlive.'
  }
];
  /*add a route:
  the app responds with Hello world for the request to the root URL.
  the HTTP GET method: fetch an existing resource. the URL contains all necessary information the server needs to locate and return the resource*/
// we type in get because we want a get request // the 'send' method prints to screen
app.get('/', (req, res) => {
  // commend .send() method out, because you can only send one thing at a time and index.html is send below and connected to the root route
  // res.send("hello world!");
  console.log(req);
  console.log(res);
  // We are just going to serve (render) the index.html file on the root route. this is how you can build a URL. 
  // We know how a server, serving a page!
  res.sendFile('views/index.html', {root: __dirname})
  console.log(__dirname);
});

// set up route to serve albums. res with JSON containing all the albums from our albums variable (add data to server)
app.get('/api/albums', (req, res) => {
  res.json(albums)
});

// Server start:
  // process.env.PORT || 3000 means "in production use the production port, otherwise use 3000 (for development)".
  // if we were pushing this to netifly or heroku there would be port variable and we be accessing that port with the below
  // Process object has an environment object that has a port
  app.listen(process.env.PORT || 3000,  () => console.log('Example app listening at http://localhost:3000/'));




