const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const ProfileSchema = new Schema({
   name: String,
   githubLink: String,
   githubProfileImage: String,
   personalSiteLink: String,
   currentCity: String
});

const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;

// const jason = {
//     profile: {
//       name: 'Jason Serafica',
//       githubLink: 'https://github.com/teknoformula/',
//       githubProfileImage: 'https://avatars2.githubusercontent.com/u/13142485?s=400&v=4',
//       personalSiteLink: 'https://teknoformula.github.io/GA-Project-00-Portfolio/',
//       currentCity: 'San Francisco'
//     }
// };