// server.js
  // SERVER-SIDE JAVASCRIPT


  //you're going to listen to the app later
  const express = require('express');
  const app = express();





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


//not really sure what this is
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//getting request, sending response
  app.get('/', (req, res) => res.send('Hello World!'));

  app.get("/api/albums", (request, response) => {
  response.json( albums);
});

  //listening for request?



  app.listen(process.env.PORT || 3000,  () => console.log('Example app listening at http://localhost:3000/'));
