const mongoose = require('mongoose');
Schema = mongoose.Schema;

const TweetSchema = new Schema({
    text: String,
    date: Date
})

const Tweet = mongoose.model('Tweet', TweetSchema);
module.exports = Tweet;