// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// const db = require('./models');

const db = require('./models');

const albums = [
    {
        name: "Ashes of the Wake",
        band: "Lamb of God",
        rating: 9
    },
    {
        name: "Aenima",
        band: "Tool",
        rating: 8
    },
    {
        name: "Australasia",
        band: "Pelican",
        rating: 10
    },
    {
        name: "Blizzard of Ozz",
        band: "Ozzy Osbourne",
        rating: 8.5
    },
    {
        name: "Dethklok",
        band: "Dethalbum I",
        rating: 10
    },
    {
        name: "Incredibad",
        band: "The Lonely Island",
        rating: 9
    },
    {
        name: "Desolation",
        band: "Khemmis",
        rating: 10
    },
]
}

db.albums.create(new_campsite, function(err, campsite){
  if (err){
    return console.log("Error:", err);
  }

  console.log("Created new campsite", campsite._id)
  process.exit(); // we're all done! Exit the program.
})
