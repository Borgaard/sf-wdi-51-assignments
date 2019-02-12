// server.js
// SERVER-SIDE JAVASCRIPT

// Make a varaible called express that requires the express framework
const express = require('express');
// Make a variable called app that is the Express application by calling the express() function. This enables calling the methods for requests, rendering HTML, configuring middleware, etc.
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

  const taquerias = [
    { name: "La Taqueria" },
    { name: "El Farolito" },
    { name: "Taqueria Cancun" }
  ];

// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
// This function executes every time a request is made
app.use((req, res, next) => {
  // Tells the browser to accept responses from any origin
  res.header("Access-Control-Allow-Origin", "*");
  // Indicates which HTTP headers can be used during the actual request
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // Passes control to the next matching route, does not rely on a particular URI scheme
  next();
});

  app.use(express.static('public'));
  app.use(express.static('vendor'));

// Waits for requests that match the specified path, in this case /, and performs the specified function, in this case send the HTTP response "Hello World"
app.get('/', (req, res) => {
  //console.log(req);
  //console.log(res);
  // res.send('Hello World!');
  res.sendFile('views/index.html' , { root : __dirname});
})

app.get('/api/albums', (req, res) => {
  res.json(albums);
})

app.get('/api/taquerias', (req, res) => res.json(taquerias));

// Listens for connections on the specified port and host, so in this case, use the production port in production, or use port 3000
app.listen(process.env.PORT || 3000,  () => console.log('Example app listening at http://localhost:3000/'));
