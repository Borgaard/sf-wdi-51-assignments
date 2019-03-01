const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DestinationSchema = new Schema({
    city: String,
    country: String,
    date: String,
    favoriteFood: String,
    image: String,
});

const Destinations = mongoose.model('Destinations', DestinationSchema);
module.exports = Destinations;