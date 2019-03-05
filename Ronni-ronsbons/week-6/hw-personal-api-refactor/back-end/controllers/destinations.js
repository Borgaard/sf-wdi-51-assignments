const db = require('../models');

module.exports = {
  index: (request, response) => {
    db.Destinations.find({}, (error, destinations) => {
      response.json(destinations);
    });
  },

  create: (request, response) => {
    console.log(request.body);
    let newDestination = new db.Destinations({
      city: request.body.city,
    });
    console.log(newDestination);
    newDestination.save( (error, newDestination) => {
      if (error) {
        console.log(error);
      };
      response.json(newDestination);
    });
  },

  delete: (request, response) => {
    console.log(request.body);
    let destinationId = request.params.id;
    console.log(destinationId);
    db.Movie.findOneandDelete( {_id: destinationId}, (error, deletedDest) => {
      if (error) {
        console.log(error);
      };
      console.log(deletedDest);
      response.json(deletedDest);
    });
  },
};