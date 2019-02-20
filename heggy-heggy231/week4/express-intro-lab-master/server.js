// server.js
// resource about express: http://expressjs.com/en/4x/api.html#app
// intro lab: https://git.generalassemb.ly/sf-wdi-51/express-intro-lab
// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS (get express, method into app)
// export express library
const express = require('express');
// app receives top level express function exported by express module
// The app object has methods for
// Routing HTTP requests; see for example, app.METHOD and app.param.
// Configuring middleware; see app.route.
// Rendering HTML views; see app.render.
// Registering a template engine; see app.engine.
const app = express();

// middleware
app.use(express.static('public'));

// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
//  next: Callback argument to the middleware function
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// seed data
  // server.js
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

// routes
// resource: https://expressjs.com/en/guide/writing-middleware.html
// route for http request, get the data from root directory
//  '/' is root folder, route where middleware function applies
//  middleware function 
//  req: HTTP request argument to the middleware function
//  res: HTTP response argument to the middleware function
//  response gets sent to root file says Hello World!
// You should see "Hello World!" The browser console only shows client-side console outputs.
app.get('/', (req, res) => res.send('Hello World!'));

// get album data be accessible, set up route to serve up
//  app.get method for the path /api/albums
//  respond with some JSON containing all the albums from our albums variable.
app.get('/api/albums', (req, res) => res.json(albums));

// remember to run nodemon or end node and serve is node server.js

// app express method listens for port, during production use the production port, otherwise use 3000 during development)".
// in console I will see "Example app listening at http://localhost:3000/" logged out
// Server start
app.listen(process.env.PORT || 3000,  () => console.log('Example app listening at http://localhost:3000/'));
