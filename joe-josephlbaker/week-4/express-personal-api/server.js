// require express and other modules
const express = require('express');
const db = require('./models');
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

// const db = require('./models');

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

//get all profiles
app.get('/api/profiles', function(req, res) {
  //send all profiles as JSON response
  db.Profile.find()
    //populate fills in the project id with project data
    .populate('projects')
    .exec(function(err, profiles) {
      if (err) {throw err;}
      res.json(profiles);
    });
});

//get one profile
app.get('/api/profiles/:id', function(req, res) {
  //find one profile by its id
  db.Profile.findOne({_id: req.params.id})
    .populate('projects')
    .exec((err, data) => {
      res.json(data);
    });
});

//create new profile
app.post('/api/profiles', function(req, res) {
  //create new profile with form data (`req.body`)
  let newProfile = new db.Profile({
    name: req.body.name,
    githubUsername: req.body.githubUsername,
    githubLink: req.body.githubLink,
    personalSiteLink: req.body.personalSiteLink,
    currentCity: req.body.currentCity
  });

  //this code will only add a project to a profile if the project already exists
  db.Project.findOne()
  //////////////edit//////////////////
})

//update profile
app.put('/api/profiles/:id', function(req, res) {
  //get profile id from url params ('req.params')
  console.log('profiles update', req.params);
  console.log(`The body is ${req.body}`);
  let profileId = req.params.id;
  //find the index of the profile we want to remove
  db.Profile.findOneAndUpdate({_id: profileId}, req.body, {new: true})
    .populate('projects')
    .exec((err, updatedProfile) => {
      res.json(updatedProfile);
    });
});

// delete profile
app.delete('/api/profiles/:id', function(req, res) {
  //get profile id from url prarams ('req.params')
  console.log('profile delete', req.params);
  let profileId = req.params.id;
  //find the index of the profile we want to remove
  db.Profile.findOneAndRemove({_id: profileId})
    .populate('projects')
    .exec(function(err, deletedProfile) {
      res.json(deletedProfile);
    });
});



/*
 * JSON API Endpoints
 */

app.get('/api', (req, res) => {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  // But you should change almost every line of this response.
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/example-username/express-personal-api/README.md", // CHANGE ME
    baseUrl: "https://morning-peak-98879.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Who I am"},
      {method: "GET", path: "/api/projects", description: "What I've worked on"},
      {method: "POST", path: "/api/projects", description: "Add a project to my personal portfolio"},
      {method: "PUT", path: "/api/projects/:id", description: "Update projects in my portfolio"},
      {method: "DELETE", path: "/api/projects/:id", description: "Remove a project from my portfolio"}
    ]
  })
});

/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Express server is up and running on http://localhost:3000/');
});