const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    name: String,
    githubUsername: String,
    githubLink: String,
    githubProfileImage: String,
    personalSiteLink: String,
    currentCity: String,
    pets: {
        name: String,
        type: String,
        breed: String
    }
});

const Profile = mongoose.model("Profile", ProfileSchema);
module.exports = Profile;