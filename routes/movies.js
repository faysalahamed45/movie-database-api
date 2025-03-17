const express = require('express');
const { createMovie, getMovies, getMovie, updateMovie, deleteMovie } = require('../controllers/movieController');
const authenticateJWT = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/',  createMovie);
router.get('/', authenticateJWT, getMovies);
router.get('/:id', authenticateJWT, getMovie);
router.put('/:id', authenticateJWT, updateMovie);
router.delete('/:id', authenticateJWT, deleteMovie);

module.exports = router;
