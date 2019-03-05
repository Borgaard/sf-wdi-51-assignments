// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

const db = require('../models');
const data = require('./data.json');

db.Destinations.deleteMany({}).then( () => {
  db.Destinations.collection.insertMany(data).then(seededEntries => {
    console.log(seededEntries);
    process.exit();
  })
}).catch(error => {
  console.log(error);
});

// remove all records that match {} -- which means remove ALL records
// db.Destinations.deleteMany({}, function(err, destinations){
//   if(err) {
//     console.log('Error occurred in remove', err);
//   } else {
//     console.log('removed all destinations');
//     // create new records based on the array books_list
//     db.Destinations.create(destinations_list, function(err, destinations){
//       if (err) {
//         return console.log('err', err);
//       };
//       console.log("created", destinations.length, "destinations");
//       process.exit();
//     });
//   };
// });