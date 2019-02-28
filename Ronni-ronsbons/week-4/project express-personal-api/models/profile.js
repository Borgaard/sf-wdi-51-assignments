const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    name: String,
    githubUsername: String,
    githubLink: String,
    currentCity: String,
    pets: [{
        name: String,
        type: String,
        isAlive: Boolean,
    }],
});

const Profile = mongoose.model('Profile', ProfileSchema);
module.exports = Profile;