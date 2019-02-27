const mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api", { useNewUrlParser: true });

// module.exports.Campsite = require("./campsite.js.example");
module.exports.MakeUp = require("./makeup.js")
module.exports.Profile = require("./profile.js")