const Movie = require('../models/movie');
const path = require('path');

// Create a new movie
exports.createMovie = async (req, res) => {
    try {
      const { title, genre, releaseYear, director, cast, rating, description } = req.body;
  
      const image = req.file ? req.file.path : null; // ✅ Cloudinary URL
  
      const newMovie = new Movie({
        title,
        genre,
        releaseYear,
        director,
        cast: cast.split(",").map((c) => c.trim()),
        rating,
        description,
        image,
      });
  
      await newMovie.save();
      res.status(201).json(newMovie);
    } catch (err) {
      console.error("Create error:", err);
      res.status(500).json({ message: "Error creating movie", error: err.message });
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
      const movie = await Movie.findById(req.params.id);
      if (!movie) return res.status(404).json({ message: "Movie not found" });
  
      const { title, genre, releaseYear, director, cast, rating, description } = req.body;
  
      movie.title = title;
      movie.genre = genre;
      movie.releaseYear = releaseYear;
      movie.director = director;
      movie.cast = cast ? cast.split(",").map((c) => c.trim()) : movie.cast;
      movie.rating = rating;
      movie.description = description;
  
      if (req.file) {
        movie.image = req.file.path; // ✅ Cloudinary URL
      }
  
      await movie.save();
      res.json(movie);
    } catch (err) {
      console.error("Update error:", err);
      res.status(500).json({ message: "Error updating movie", error: err.message });
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
