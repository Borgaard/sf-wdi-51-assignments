// server.js
  // SERVER-SIDE JAVASCRIPT
  const express = require('express');
  const app = express();

//array of albums
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

//array of taquerias
const taquerias = [
  { name: "La Taqueria" },
  { name: "El Farolito" },
  { name: "Taqueria Cancun" }
];

app.use(express.static('public'));

  // Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get('/', (req, res) => res.sendFile('views/index.html' , {root : __dirname}));

  app.get('/api/albums', (req, res) => res.json(albums));

  app.get('/api/taquerias', (req, res) => res.json(taquerias));


  app.listen(process.env.PORT || 3000,  () => console.log('Example app listening at http://localhost:3000/'));
