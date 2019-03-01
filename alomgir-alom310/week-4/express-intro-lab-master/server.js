//requirements
const express = require('express');
const app = express();

  // Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
  
  // Middleware
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  //routes
  app.get('/',  (req, res) => {
    console.log('req = ', req);
    console.log('res = ', res);
  

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

  res.sendFile('views/index.html' , { root : __dirname});
});

  app.get('api/albumbs', (req,res) => res.json(albums));
    
  //server start
  app.listen(process.env.PORT || 3000,  () => console.log('Example app listening at http://localhost:3000/'));


