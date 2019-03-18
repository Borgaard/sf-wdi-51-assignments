const mongoose = require('mongoose');

const DogSchema = new mongoose.Schema({
    name: String,
    age: Number,
    frequency: String,
    imageUrl: String
})

module.exports = mongoose.model('Dog', DogSchema)