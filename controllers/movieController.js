const Movie = require('../models/movie');

// Create a new movie
exports.createMovie = async (req, res) => {
    try {
        const newMovie = new Movie(req.body);
        await newMovie.save();
        console.log(newMovie)
        res.status(201).json(newMovie);
    } catch (err) {
        res.status(400).json({ message: 'Error creating movie', error: err });
    }
};

// Get all movies
exports.getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json(movies);
    } catch (err) {
        res.status(400).json({ message: 'Error fetching movies', error: err });
    }
};

// Get a specific movie by ID
exports.getMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) return res.status(404).json({ message: 'Movie not found' });
        res.status(200).json(movie);
    } catch (err) {
        res.status(400).json({ message: 'Error fetching movie', error: err });
    }
};

// Update a movie
exports.updateMovie = async (req, res) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMovie) return res.status(404).json({ message: 'Movie not found' });
        res.status(200).json(updatedMovie);
    } catch (err) {
        res.status(400).json({ message: 'Error updating movie', error: err });
    }
};

// Delete a movie
exports.deleteMovie = async (req, res) => {
    try {
        const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
        if (!deletedMovie) return res.status(404).json({ message: 'Movie not found' });
        res.status(200).json({ message: 'Movie deleted' });
    } catch (err) {
        res.status(400).json({ message: 'Error deleting movie', error: err });
    }
};
