const mongoose = require('./mongoose');
Schema = mongoose.Schema;

const movieSchema = new Schema({
    name: String,
    releaseDate: Date,
    rating: Number,
    viewDate: Date,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;