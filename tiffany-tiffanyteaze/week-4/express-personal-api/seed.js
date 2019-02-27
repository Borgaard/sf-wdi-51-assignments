// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// const db = require('./models');

// const new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })

const db = require('./models');


let movies_list = [
    {
        name: "The Green Book",
        releaseDate: "2019",
        rating: 3,
        viewDate: "February 02, 2019",
    },
    {
        name: "Crazy Rich Asians",
        releaseDate: "2018",
        rating: 4,
        viewDate: "January 21, 2019",
    },
    {
        name: "MI: Fallout",
        releaseDate: "2018",
        rating: 5,
        viewDate: "January 18, 2019",
    }
]

db.Movie.create(new_movie, function(err, campsite){
    if (err){
        return console.log("Error:", err);
    }
    console.log(`Created new movie ${movie.name}`);
    process.exit();
})