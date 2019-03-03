// [ x ] creating a new project with Node and Express
// [ x ] creating routes for clients to make requests to your server 
// [  ] add some starter data (often called "seed data") to serve when the users visit '/api/albums'.
// [  ] storing data on the server:
// serverside js
//  export express here
const express = require('express');
// set var app to express() lib functions
const app = express();


// add taquerias data points
let taquerias = [
  { name: "La Taqueria" },
  { name: "El Farolito" },
  { name: "Taqueria Cancun" }
]

// add album data points make this global so every one can see
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
// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// set root dir
app.get('/', (req, res) => {
  console.log('##### req ##### ', req);
  console.log('##### res ##### ', res);
  res.send('Hello Heggy');
});

// app object has a method called .get() which takes two arguments: a url and a callback function  http://localhost:3000/api/taquerias
  // res.json(taquerias) makes response into json object http://localhost:3000/api/taquerias
app.get('/api/taquerias', (req, res) => res.json(taquerias) );


// set up port 3000 to listen
//  process.env.PORT || 3000 "in production use the production port, otherwise use 3000 (for development)".
app.listen(process.env.PORT || 3000,  () => console.log('Server is up and running!!! Example app listening at http://localhost:3000/'));