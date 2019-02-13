// server.js
  // SERVER-SIDE JAVASCRIPT

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

  // this is a single file app. It starts a server and listens on port 3000 for connections
  // the 2 next lines create an Express application. The express() function is a top-level function exported by the express module
  const express = require('express');
  const app = express();

  // Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

   /*add a route:
    the app responds with Hello world for the request to the root URL.
    the HTTP GET method: fetch an existing resource. the URL contains all necessary information the server needs to locate and return the resource*/
  app.get('/', (req, res) => res.send(`${req} + ${res}`));

  // Server start:
  // process.env.PORT || 3000 means "in production use the production port, otherwise use 3000 (for development)".
  app.listen(process.env.PORT || 3000,  () => console.log('Example app listening at http://localhost:3000/'));


// 4. struggeling
// req = object undefined?
// res =

// add data to server
app.get('/api/albums', (req, res) => res.json(json));

// request data from server
// make a route to serve our index.html file. we are just going to serve the index on the route GET / for now
// STRUGGELING
app.get('/', (req, res) => {
    console.log("html");
    // __dirname is the directory of the script and it is not found, why?
    res.sendFile('views/index.html', {root: __dirname})
      }
        )

// localhost:3000 does not show html page. because. __dirname is not found?


// Add static files
// server.js
  //
  app.use(express.static('public'));

// it sais refused access. before I could see 3 objects from the albums. I do not understand this.



