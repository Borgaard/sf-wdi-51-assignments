// serverside js
//  export express here
const express = require('express');
// set var app to express() lib functions
const app = express();

// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// set root dir
app.get('/', (req, res) => res.send('Hello Heggy'));