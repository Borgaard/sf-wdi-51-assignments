const mongoose = require("mongoose");
// mongoose.connect( process.env.MONGODB_URI || "YOUR CURRENT LOCALHOST DB CONNECTION STRING HERE" );
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api", {useMongoClient: true});

// module.exports.Campsite = require("./campsite.js.example");
