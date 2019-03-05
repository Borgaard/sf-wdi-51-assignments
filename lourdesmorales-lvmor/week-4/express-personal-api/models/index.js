const mongoose = require("mongoose");
// mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api", {useMongoClient: true});
mongoose.connect( process.env.MONGODB_URI 
    || "mongodb://heroku_phcl53gd:kmlmhr4nmkn4tk6cplsgoal2f1@ds137255.mlab.com:37255/heroku_phcl53gd", 
    {useMongoClient: true});
module.exports.Books = require("./books");
