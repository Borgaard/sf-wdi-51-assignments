const mongoose = require("mongoose");
// Update your database connection to point to Heroku's database. Open models/index.js and add the following to the mongoose.connect method
// what port to run on, and what database to connect to
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api", {useMongoClient: true});

// module.exports.Campsite = require("./campsite.js.example");
