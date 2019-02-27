// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

//get access to our models
const db = require('./models');

//data to be saved in db
const makeUpList = [
    {
    name: 'Frog Prince',
    brand: 'Lipstick Queen',
    type: 'Lipstick',
    color: 'Green/Red (color changes after application!)'
    },
    {
    name: 'jet-set',
    brand: 'Nyx',
    type: 'Lipstick',
    color: 'blue',
    },
    {
    name: 'Champagne Pop',
    brand: 'Becca',
    type: 'Highlighter',
    color: 'Golden',
    },
    {
    name:`Pro Filt'r Foundation`,
    brand: 'Fenty Beauty',
    type: 'Foundation',
    color: 'my skin tone lol'
    }
]

const jason = [
  {
    name: 'Jason Serafica',
    githubLink: 'https://github.com/teknoformula/',
    githubProfileImage: 'https://avatars2.githubusercontent.com/u/13142485?s=400&v=4',
    personalSiteLink: 'https://teknoformula.github.io/GA-Project-00-Portfolio/',
    currentCity: 'San Francisco'
  }
];


db.Profile.deleteMany({}, (err, profile) => {
  console.log('reloading profile...');
  jason.forEach( profileData => {
    let profile = new db.Profile({
      name: profileData.name,
      githubLink: profileData.githubLink,
      githubProfileImage: profileData.githubProfileImage,
      personalSiteLink: profileData.githubProfileImage,
      currentCity: profileData.currentCity
    });
    //save profile
    profile.save( (err, savedProfile) => {
      if (err) return console.log(err);

      // display saved profile
      console.log(`saved ${savedProfile.name} profile`);
    })
  });
});

//refresh makeup database
db.MakeUp.deleteMany({}, (err, products) => {
  console.log("removed all makeup products");
  makeUpList.forEach( productData => {
    //store data props
    let product = new db.MakeUp({
      name: productData.name,
      brand: productData.brand,
      type: productData.type,
      color: productData.color 
    });
    //save to the db
    product.save( (err, savedProduct) => {
      if (err) return console.log(err);

      //display what has been saved in db
      console.log(`saved ${savedProduct.name} by ${savedProduct.brand}`)
    });
  });
});
