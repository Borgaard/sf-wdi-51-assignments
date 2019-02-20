// server.js
// resource about express: http://expressjs.com/en/4x/api.html#app
// intro lab: https://git.generalassemb.ly/sf-wdi-51/express-intro-lab
// SERVER-SIDE JAVASCRIPT

// export express library
const express = require('express');
// app receives top level express function exported by express module
// The app object has methods for
// Routing HTTP requests; see for example, app.METHOD and app.param.
// Configuring middleware; see app.route.
// Rendering HTML views; see app.render.
// Registering a template engine; see app.engine.
const app = express();

// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
//  next: Callback argument to the middleware function
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// resource: https://expressjs.com/en/guide/writing-middleware.html
// route for http request, get the data from root directory
//  '/' is root folder, route where middleware function applies
//  middleware function 
//  req: HTTP request argument to the middleware function
//  res: HTTP response argument to the middleware function
//  response gets sent to root file says Hello World!
app.get('/', (req, res) => res.send('Hello World!'));

// app express method listens for port, during production use the production port, otherwise use 3000 during development)".
// in console I will see "Example app listening at http://localhost:3000/" logged out
app.listen(process.env.PORT || 3000,  () => console.log('Example app listening at http://localhost:3000/'));
