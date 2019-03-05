 // server.js
  // SERVER-SIDE JAVASCRIPT

  //Invokes the express folder and its contents and requires usage of the modules
  const express = require('express');
  //create a variable to reference the entire express module with "app" -- eg "app.get" invokes the express .get method.
  const app = express();

  //invokes body parser
  const bodyParser = require('body-parser');

  app.use(express.static(__dirname + '/public/'));

  app.use(bodyParser.urlencoded({extended: false}));

  const albums = [
    {
      title: 'desolation',
      artist: 'khemmis'
    },
    {
      title: 'ashes of the wake',
      artist: 'lamb of god'
    },
    {
      title: 'powerslave',
      artist: 'iron maiden'
    }
  ]

  // Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  // creates a text string when a user accesses the root directory of server
  app.get('/', (req, res) => { 
    res.sendFile('views/index.html', {root:__dirname});
  
  }); 

  app.get('/api/albums', (req, res) => {
    res.json(albums)
  })

  // creates an or statement that will use the live deployed environment if possible, or, use local port
  app.listen(process.env.PORT || 3000,  () => console.log('Example app listening at http://localhost:3000/'));