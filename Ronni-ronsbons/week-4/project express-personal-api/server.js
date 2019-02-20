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

// Data
let profile = {
  name: 'Ronni',
  githubUsername: 'ronsbons',
  githubLink: 'https://github.com/ronsbons',
  currentCity: 'San Mateo',
  pets: [
      {
          name: 'Fluffy',
          type: 'rabbit',
          isAlive: false,
      },
      {
          name: 'Tweety',
          type: 'bird',
          isAlive: false,
      },
      {
          name: 'Tiger',
          type: 'cat',
          isAlive: false,
      },
      {
          name: 'Holiday',
          type: 'cat',
          isAlive: true,
      },
  ],
};

/*
let destinations = [
  {
    _id: 1,
    city: 'Lake Tahoe, CA',
    country: 'USA',
    date: 'November 2018',
    favoriteFood: '',
  },
  {
    _id: 2,
    city: 'Traverse City, MI',
    country: 'USA',
    date: 'October 2018',
    favoriteFood: 'apple cider',
  },
  {
    _id: 3,
    city: 'Toronto, ON',
    country: 'Canada',
    date: 'September 2018',
    favoriteFood: 'vegan mango ice cream with sticky rice',
  },
  {
    _id: 4,
    city: 'Seattle, WA',
    country: 'USA',
    date: 'August 2017',
    favoriteFood: 'fresh seafood',
  },
  {
    _id: 5,
    city: 'Bologna',
    country: 'Italy',
    date: 'July 2017',
    favoriteFood: 'pasta',
  },
  {
    _id: 6,
    city: 'Minneapolis, MN',
    country: 'USA',
    date: 'June 2017',
    favoriteFood: 'fried cheese curds',
  },
  {
    _id: 7,
    city: 'Tokyo',
    country: 'Japan',
    date: 'May 2017',
    favoriteFood: 'everything',
  },
];

let newDestinationId = 8;
*/

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
    woopsIForgotToDocumentAllMyEndpoints: true,
    message: "Welcome to my personal API! Here's what you need to know!",
    documentationUrl: "https://github.com/ronsbons/express-personal-api/README.md", // CHANGE ME
    baseUrl: "http://shielded-garden-69863.herokuapp.com",
    endpoints: [
      {
        method: "GET",
        path: "/api",
        description: "Describes all available endpoints"
      },
      {
        method: "GET",
        path: "/api/profile",
        description: "A little about me"
      },
      {
        method: "GET",
        path: "/api/destinations",
        description: "Places I've been"
      },
      {
        method: "POST",
        path: "/api/destinations",
        description: "Create a new destination"
      },
      {
        method: "PUT",
        path: "/api/destinations",
        description: "Edit and update a previous destination",
      },
      {
        method: "DELETE",
        path: "/api/destinations",
        description: "Delete a destination",
      },
    ],
  });
});


// cRud - READ
// get profile
app.get('/api/profile', (request, response) => {
  console.log('my profile');
  response.json(profile);
});

// get all destinations
app.get('/api/destinations', (request, response) => {
  console.log(`places I've been`);
  // comment out code that was for hard-coded array
  // response.json(destinations);
  db.Destinations.find((err, foundDestinations) => {
    if (err) {
      console.log(`error: ${err}`);
      response.sendStatus(500);
    }
    response.json(foundDestinations);
  });
});

// get one destination
app.get('/api/destinations/:id', (request, response) => {
  console.log('destinations show', request.params);
  // comment out code for hard-coded array
  /* for (var i = 0; i < destinations.length; i++) {
    // console.log(destinations[i]);
    if (destinations[i]._id === parseInt(request.params.id)) {
      // console.log(destinations[i]._id);
      // console.log(request.params.id);
      response.json(destinations[i]);
      break;
    };
  }; */
  db.Destinations.findOne({ _id: request.params.id }, (err, foundDestination) => {
    if (err) {
      console.log(`Could not find your destination`);
    }
    response.json(foundDestination);
  });
});


// Crud - CREATE
// create a new destination
app.post('/api/destinations', (request, response) => {
  // comment out code for hard-coded array
  /* console.log('create destination', request.body);
  // get info from request of new destination
  let newDestination = request.body;
  // add id number to new destination
  newDestination._id = newDestinationId++;
  // add to array
  destinations.push(newDestination);
  response.json(newDestination); */

  // use date from request body to create a new destination using the schema
  const newDest = new db.Destinations({
    city: request.body.city,
    country: request.body.country,
    date: request.body.date,
    favoriteFood: request.body.food,
    image: request.body.image,
  });
  // save the new destination to the db
  newDest.save((err, destination) => {
    if (err) { throw err; };
    console.log(`Saved ${destination.city}`);
    response.json(destination);
  });
});


// crUd - UPDATE
// edit and update a destination
app.put('/api/destinations/:id', (request, response) => {
  console.log('update destination', request.params);
  console.log(`${request.body}`);
  // get id from url params
  let destinationId = request.params.id;

  // comment out code for hard-coded array
  // find index within destinations array to match with the url params
  /* let updateDestinationIndex = destinations.findIndex((element, index) => {
    return (element._id === parseInt(destinationId));
  });
  console.log('updating book with index', updateDestinationIndex);
  let destinationUpdate = destinations[updateDestinationIndex];
  // at the index of the matched destination, remove 1 item, and replace it with the request.params
  destinations.splice(updateDestinationIndex, 1, request.params);
  response.json(destinationUpdate); */

  // find the destination you want to update
  db.Destinations.findOneAndUpdate(({ _id: destinationId }, request.body, { new: true }), (err, updatedDest) => {
    if (err) {
      throw err;
    }
    response.json(updatedDest);
  });
});


// cruD - DELETE
// delete a destination
app.delete('/api/destinations/:id', (request, response) => {
  // get destination id from url params (`req.params`)
  console.log('destinations delete', request.params);
  let destinationId = request.params.id;

  // comment out code for hard-coded array
  // find the index of the destination we want to remove that matches the request
  /* let deleteDestinationIndex = destinations.findIndex((element, index) => {
    return (element._id === parseInt(destinationId));
  });
  console.log('deleting destination with index', deleteDestinationIndex);
  var destinationToDelete = destinations[deleteDestinationIndex];
  // in array, at the index of the matched destination, remove that 1 item
  destinations.splice(deleteDestinationIndex, 1);
  res.json(destinationToDelete); */

  // find the destination and then remove it
  db.Destinations.findOneAndDelete({ _id: destinationId }, (err, deletedDest) => {
    if (err) { throw err; };
    response.json(deletedDest);
  });
});


/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Express server is up and running on http://localhost:3000/');
});
