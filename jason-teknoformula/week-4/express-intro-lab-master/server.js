// server.js
  // SERVER-SIDE JAVASCRIPT

  //require express
  const express = require('express');
  //save functionality of express in an app
  const app = express();

  //middleware
  app.use(express.static('public'));
  app.use(express.static('vendor'));

  //seed data
  const albums = [
  {
    title: 'Black Out',
    artist: 'Britney Spears'
  },
  {
    title: 'M3LL155X - EP',
    artist: 'FKA twigs'
  },
  {
    title: 'EMOTION',
    artist: 'Carly Rae Jepsen'
  }
  ];

  const taquerias = [
    { name: "La Taqueria" },
    { name: "El Farolito" },
    { name: "Taqueria Cancun" }
  ];

  // Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  //use public directory
  app.use(express.static('public'));

  //set up a root route, will display "Hello World!"
  app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile('views/index.html' , { root : __dirname});
  });

  //albums route
  app.get('/api/albums', (req,res) => {
    res.json(albums);
  })

  //taquerias route
  app.get('/api/taquerias', (req,res) => {
    res.json(taquerias);
  })

  //use port 3000 for development and to see changes
  app.listen(process.env.PORT || 3000,  () => console.log('Example app listening at http://localhost:3000/'));
