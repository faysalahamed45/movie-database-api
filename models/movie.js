const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    director: { type: String, required: true },
    cast: [String],
    rating: { type: Number, min: 0, max: 10 },
    description: String,
});

module.exports = mongoose.model('Movie', movieSchema);
