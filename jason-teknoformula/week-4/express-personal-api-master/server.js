// require express and other modules
const express = require('express');
const app = express();


// parse incoming urlencoded form data
// and populate the req.body object
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

// activate when mongoDB is connected
const db = require('./models');


/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', (req, res) => {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  // But you should change almost every line of this response.
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: false, // CHANGE ME ;)
    message: "Welcome to my personal api! Make up is cool!",
    documentationUrl: "https://github.com/example-username/express-personal-api/README.md", // CHANGE ME
    baseUrl: "https://fierce-ocean-32917.herokuapp.com/", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/jason", description: "Data about me"},
      {method: "GET", path: "/api/makeup", description: "Data about me make-up"}, 
      {method: "POST", path: "/api/jason/makeUp", description: "E.g. Create a new make-up product"}
    ]
  })
});

/**********
 * HARD CODED ROUTES *
 **********/

 //get profile object route
app.get('/api/profile', (req,res) => {
  db.Profile.findOne({name: 'Jason Serafica'}).populate().
  exec( (err, profile) => {
    if (err) return console.log;
    res.json(profile);
  })
})

//get makeup object route
app.get('/api/makeup', (req,res) => {
  db.MakeUp.find().populate().
  exec( (err, makeup) => {
    if (err) return console.log;
    res.json(makeup);
  })
})

//show makeup product
app.get('/api/makeup/:id', (req,res) => {
  let id = req.params.id;
  db.MakeUp.findOne({_id: id}, (err, data) => {
      res.json(data);
  })
})

//create new makeup
app.post('/api/makeup', (req,res) => {
  //create new makeup product with form data
  let newProduct = new db.MakeUp({
    name: req.body.name,
    brand: req.body.brand,
    type: req.body.type,
    color: req.body.color
  });
  newProduct.save( (err, product) => {
    if (err) return console.log(err);

    console.log(`saved ${newProduct.name}`);
  })
  res.json(newProduct);
})

//update makeup
app.put('/api/makeup/:id', (req, res) => {
  // get makeup id from url params (`req.params`)
  console.log('makeup edit', req.params);
  console.log('body is', req.body);
  let makeupId = req.params.id;
  // find the index of the book we want to remove
  db.MakeUp.findOneAndUpdate({ _id: makeupId }, req.body, {new: true})
    .populate()
    .exec((err, updatedMakeUp)=> {
      res.json(updatedMakeUp);
  });
});

//delete makeup
app.delete('/api/makeup/:id', (req, res) => {
  // get makeup id from url params (`req.params`)
  console.log('books delete', req.params);
  let makeupId = req.params.id;
  // find the index of the make up we want to remove
  db.MakeUp.findOneAndRemove({ _id: makeupId })
    .populate()
    .exec(function (err, deletedMakeUp) {
      res.json(deletedMakeUp);
  });
});

/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Express server is up and running on http://localhost:3000/');
});
