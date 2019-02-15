// server.js
  // SERVER-SIDE JAVASCRIPT

 const express = require('express');
const app = express();

  // we can also parse jason. we can parse this object out to browser
  // parsing objects is how APIs are written
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
  // initialise variable called app and set it euqal to express function
  const app = express();

  // setup express app
  app.use(express.static('public'));

  // Allow CORS (cross origin resource sharing, it is a security protocol): we'll use this today to reduce security so we can more easily test our code in the browser.
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

   /*add a route:
    the app responds with Hello world for the request to the root URL.
    the HTTP GET method: fetch an existing resource. the URL contains all necessary information the server needs to locate and return the resource*/
  // we. type in get because we want a get request
                                // send method prints to screen
  app.get('/', (req, res) => res.send(`${req} + ${res}`));

 // solution code:
  // app.get('/', (req, res) => (
  //                    console.log('req=' , req);
  //                    console.log('res-' , res);

  //       res.sendFile('views/index.html', {root: __dirname})
  //                    );


  // Server start:
  // process.env.PORT || 3000 means "in production use the production port, otherwise use 3000 (for development)".
  // if we were pushing this to netifly or heroku there would be port variable and we be accessing that port with the below
  // Process object has an environment object that has a port
  app.listen(process.env.PORT || 3000,  () => console.log('Example app listening at http://localhost:3000/'));


// 4. struggeling
// req = object undefined?
// res =

// add data to server
app.get('/api/albums', (req, res) => res.json(albums));

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
  // make a public folder for statis files
  // app.use to use middleware, its like calling a function
  app.use(express.static('public'));

// it sais refused access. before I could see 3 objects from the albums. I do not understand this.

  app.get('/', (req, res) => {
            console.log(`req =`, req);
            console.log(`res =`, res);
            // res.send('Hello christina!');
            res.sendFile('views/index.html' , { root : __dirname});
    });


app.get('/api/albums', (req, res) => res.json(albums));

  app.listen(process.env.PORT || 3003,  () => console.log('Example app listening at http://localhost:3000/'));

// Notes
// ====================




