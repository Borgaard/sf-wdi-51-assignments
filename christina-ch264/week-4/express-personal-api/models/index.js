const mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api");

// module.exports.Campsite = require("./campsite.js.example");

module.exports.Book = require('./book');
