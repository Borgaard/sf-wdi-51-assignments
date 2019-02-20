const mongoose = require('mongoose');
Schema = mongoose.Schema;
const Tweet = require('./tweet');

const UserSchema = new Schema({
    name: String,
    tweets: [Tweet.Schema]
})

const User = mongoose.model('User', UserSchema);
module.exports = User;

