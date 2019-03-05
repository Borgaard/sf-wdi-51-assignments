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

app.get("/api/profile", (req, res) => {
  res.json({
    name: "Tiffany Teaze",
    githubUsername: "tiffanyteaze",
    githubProfileImage: "https://avatars1.githubusercontent.com/u/46355886?s=460&v=4",
    personalSiteLink: "tiffanyteaze.com",
    currentCity: "San Francisco, CA", 
    pets: [{
      name: "Bean",
      type: "Dog",
      breed: "Lhasapoo"
    }]
  });
});

app.get("/api/games", (req, res) => {
  db.Game.find(function(err, games) {
    if (err) {
      console.log("index error: " + err);
      res.sendStatus(500);
    }
    res.json(games);
  })
})

//find one game
app.get("/api/games/:id", (req, res) => {
  db.Game.findOne({_id: req.params.id }, (err, game) => {
    res.json(game);
  });
})

// create new game
app.post('/api/games', (req, res) => {
  // create new game with form data (`req.body`)
  console.log('games create', req.body);
  var newGame = req.body;
  db.Game.create(newGame, (err, newGame) => {
    if (err) console.log("Game was not created.");
    res.json(newGame);
  })

});

// edit game
app.put('/api/games/:id', (req, res) => {
  let gameId = req.params.id;
  console.log(gameId);
  db.Game.findOneAndUpdate({ _id: gameId }, req.body, (err, updatedGame) => {
      if (err) return console.log(err);
      console.log(updatedGame);
      res.json(updatedGame);
  });
});

// Delete a specific game
app.delete('/api/games/:id', (req, res) => {
  let gameId = req.params.id;
  db.Game.findOneAndDelete({_id: gameId}, (err, foundGame) => {
    // if (err) console.log(err);
    res.json(foundGame);
  })
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
    baseUrl: "http://YOUR-APP-NAME.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/games", description: "View a list of games played"},
      {method: "GET", path: "/api/games/:id", description: "View one game's information"},
      {method: "POST", path: "/api/games", description: "Createa  new game"},
      {method: "PUT", path: "/api/games/:id", description: "Edit a game's information"},
      {method: "DELETE", path: "/api/games/:id", description: "Edit a game's information"}
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
