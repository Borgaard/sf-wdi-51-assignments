const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    name: String,
    githubUsername: String,
    githubLink: String,
    personalSiteLink: String,
    currentCity: String,
    projects: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }
});

const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;

