// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

const db = require('./models');

const movies_list = [
    {
        name: "Lego Movie 2",
        releaseDate: "2019",
        rating: 5,
        viewDate: "2019"
    },
    {
        name: "Shoplifters",
        releaseDate: "2018",
        rating: 5,
        viewDate: "2018"
    },
    {
        name: "Bird Box",
        releaseDate: "2018",
        rating: 1,
        viewDate: "2018"
    }]

db.Movie.create(movies_list, function(err, movie){
    if (err){
         return console.log(`Error: ${err}`);
       }
       console.log(`Created new movie: ${movie.name}`);
       process.exit(); // we're all done! Exit the program.
     });
