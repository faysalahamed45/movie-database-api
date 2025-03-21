const express = require('express');
const { createMovie, getMovies, getMovie, updateMovie, deleteMovie } = require('../controllers/movieController');
const authenticateJWT = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create', authenticateJWT,createMovie);
router.get('/allmovie' ,authenticateJWT,  getMovies);
router.get('/search/:id', authenticateJWT, getMovie);
router.put('/update/:id', authenticateJWT, updateMovie);
router.delete('/delete/:id', authenticateJWT, deleteMovie);

module.exports = router;
