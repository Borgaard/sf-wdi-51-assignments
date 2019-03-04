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
      {method: "GET", path: "/api/videogames", description: "View list of games played"}, 
      {method: "GET", path: "/api/videogames/:id", description: "View one game played"}, 
      {method: "POST", path: "/api/videogames", description: "Create a new game"},
      {method: "PUT", path: "/api/videogames/:id", description: "Update one game played"}, 
      {method: "Delete", path: "/api/videogames/:id", description: "Delete one game played"}, 
    ]
  })
});


app.get('/api/profile',(req, res) => {
  // res.send('Welcome to my profile'),
  res.json({
    name: 'Christina Hastenrath',
    githubUsername: 'ch264',
    githubLink: 'https://github.com/ch264',
    githubProfileImage: 'https://github.com/settings/profile',
    linkedIn: 'https://www.linkedin.com/in/christinahastenrath/',
    facebook: 'https://www.facebook.com' ,
    currentCity: 'San Francisco',
    pets: [
      {
      name: 'Bella',
      type: 'PetRabbit',
      breed: 'dutch short hair'
      },
      {
        name: 'Emma',
        type: 'dog',
        breed: 'Springer Spaniel'
      }
    ]
  });
});


// find all games
app.get("/api/videogames", (req, res) => {
  db.Videogame.find(function(err, videogame) {
    if (err) {
      console.log("index error: " + err);
      res.sendStatus(500);
    }
    res.json(videogame);
  })
})

// find one game
app.get('/api/videogames/:id', (req, res) => {
  db.Videogame.findOne({_id: req.params.id}, (err, foundVideogame) => {
    if (err) return console.log(err);
    res.json(foundVideogame)
  });
});

// create a new game
app.post('/api/videogames', (req, res) => {
  let newVideogame = new db.Videogame({
    title: req.body.title,
    avatar: req.body.avatar
  })

  db.Videogame.create(newVideogame, (err, newVideogameCreated) => {
    if (err) console.log('Game over create');
    res.json(newVideogameCreated);
  });
  // newVideogame.save((err, videogame) => {
  //   if (err) {console.log(err)}
  //   res.json(videogame)
  // })
});

// Edit a game
app.put('/api/videogames/:id', (req, res) => {
  let videogameId = req.params.id;
  // console.log(videogameId);
  db.Videogame.findOneAndUpdate({ _id: videogameId }, req.body, (err, updatedVideogame) => {
      if (err) return console.log(err);
      console.log(updatedVideogame);
      res.json(updatedVideogame);
  });
});


// // delete a specific videogame
//   app.delete('./api/videogames/:id', (req, res) => {
//     let videogameId = req.params.id;

//     db.Videogame.findByIdAndRemove({ _id: videogameId })
//     .exec((err, foundVideogameDelete) => {
//       if (err) return console.log("game over delete")
//       res.json(foundVideogameDelete);
//     });
//   });



  // Delete a specific book
  app.delete('/api/videogames/:id', (req, res) => {
    let videogameId = req.params.id;
    db.Videogame.findOneAndDelete({_id: videogameId}, (err, foundVideogame) => {
      // if (err) console.log(err);
      res.json(foundVideogame);
    })
  });







/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Express server is up and running on http://localhost:3000/');
});
