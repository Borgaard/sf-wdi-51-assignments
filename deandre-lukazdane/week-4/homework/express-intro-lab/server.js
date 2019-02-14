// server.js
   const taquerias = [
    { name: "La Taqueria" },
    { name: "El Farolito" },
    { name: "Taqueria Cancun" }
  ];
  // SERVER-SIDE JAVASCRIPT
  const express = require('express');
  const app = express();
  app.use(express.static('public'));

//array added in step 4, provides key pairs for function
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
  // mounts specifed middleware function(s)
  app.use((req, res, next) => {
  // Allows web aplicatin in one domain to access resources from a server on another domain
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use(express.static('vendor'));

//Routes the 'get' path with the callback functions example:'/api/path/etc'
app.get('/', (req, res) => {
//console.log(req, res) => { 
  console.log('req =', res);
  console.log('res =', req);

  //meant to send index page
  res.sendFile('views/index.html', { root : __dirname});
});

  app.get('/api/albums', (req, res) =>  res.json(albums));

  //app.get('/api/taquerias', (req, res) => res.json(taquerias));

//binds to specified port, if unset, binds to arbitrary port(good for automated tasks and tests)
  app.listen(process.env.PORT || 3000,  () => console.log('Example app listening at http://localhost:3000/'));
