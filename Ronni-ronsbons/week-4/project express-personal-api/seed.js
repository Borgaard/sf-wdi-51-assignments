// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

const db = require('./models');

// const new_campsite = {description: "Sharp rocks. Middle of nowhere."}
// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }
//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })

let destinations_list = [
  {
    city: 'Lake Tahoe, CA',
    country: 'USA',
    date: 'November 2018',
    favoriteFood: '',
    image: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.buckinghamtahoerentals.com%2Fwp-content%2Fuploads%2F2018%2F01%2FThe-Keys.jpg&f=1',
  },
  {
    city: 'Traverse City, MI',
    country: 'USA',
    date: 'October 2018',
    favoriteFood: 'apple cider',
    image: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fww1.prweb.com%2Fprfiles%2F2013%2F08%2F23%2F11056663%2FFALLShantyCreek6.jpg&f=1',
  },
  {
    city: 'Toronto, ON',
    country: 'Canada',
    date: 'September 2018',
    favoriteFood: 'vegan mango ice cream with sticky rice',
    image: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwpmedia.news.nationalpost.com%2F2016%2F10%2Ftrav-byers-falla-1.jpg%3Fquality%3D65%26strip%3Dall&f=1',
  },
  {
    city: 'Seattle, WA',
    country: 'USA',
    date: 'August 2017',
    favoriteFood: 'fresh seafood',
    image: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F45%2Fa3%2Fc3%2F45a3c3a04f3dee1f5fd12da07cd22dd4.jpg&f=1',
  },
  {
    city: 'Bologna',
    country: 'Italy',
    date: 'July 2017',
    favoriteFood: 'pasta',
    image: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fd1x3cbuht6sy0f.cloudfront.net%2Fsales%2F63307%2Fd99a0a84_d87d_4bb6_b2af_d3432dfce9bb.jpg&f=1',
  },
  {
    city: 'Minneapolis, MN',
    country: 'USA',
    date: 'June 2017',
    favoriteFood: 'fried cheese curds',
    image: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Frealestatetwincities.net%2Fwp-content%2Fuploads%2F2007%2F07%2Fmarion-dakota-003480x366.jpg&f=1',
  },
  {
    city: 'Tokyo',
    country: 'Japan',
    date: 'May 2017',
    favoriteFood: 'everything',
    image: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fd2v9y0dukr6mq2.cloudfront.net%2Fvideo%2Fthumbnail%2F4Pju2CVAximeztx5w%2Fvideoblocks-tokyo-may-2-2017-traffic-rushes-at-night-on-a-crowded-street-in-the-business-district-of-shinjuku-in-the-heart-of-tokyo-japan-capital-city-shot-as-a-time-lapse-video_s5z24cijz_thumbnail-full01.png&f=1',
  },
];

// remove all records that match {} -- which means remove ALL records
db.Destinations.deleteMany({}, function(err, destinations){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all destinations');
    // create new records based on the array books_list
    db.Destinations.create(destinations_list, function(err, destinations){
      if (err) {
        return console.log('err', err);
      };
      console.log("created", destinations.length, "destinations");
      process.exit();
    });
  };
});