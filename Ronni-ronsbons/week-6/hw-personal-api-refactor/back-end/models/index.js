const mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api", {useNewUrlParser: true});

module.exports.Destinations = require('./destinationModel.js');