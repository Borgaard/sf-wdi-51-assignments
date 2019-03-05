  // server.js

/************
 * SERVER-SIDE JAVASCRIPT *
 ************/
// import the express library to my script file
  const express = require('express');
// calling function express and returning object app
  const app = express();


/************
 * MIDDLEWARE *
 ************/
  // Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
  // app.use is method, any webpage can make AJAX request using JS
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

/************
 * DATABASE *
 ************/
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

/**********
 * ROUTES *
 **********/
// User making get request; user requesting to get data from server 
  app.get('/', (req, res) => res.send('Hello World!'));

  app.get('/api/albums', (req,res) => {
    res.json(albums)
  });

/**********
 * SERVER *
 **********/
// in production use the production port, otherwise use 3000 (for development)
  app.listen(process.env.PORT || 3000,  () => console.log('Example app listening at http://localhost:3000/'));
