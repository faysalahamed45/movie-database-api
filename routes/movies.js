const express = require('express');
const multer = require('multer');
const { createMovie, getMovies, getMovie, updateMovie, deleteMovie } = require('../controllers/movieController');
const authenticateJWT = require('../middleware/authMiddleware');

const router = express.Router();

// Configure multer for image storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({ storage });

// Add with image upload
router.post('/create', authenticateJWT, upload.single('image'), createMovie);
router.get('/allmovie', authenticateJWT, getMovies);
router.get('/search/:id', authenticateJWT, getMovie);
router.put(
    "/update/:id",
    authenticateJWT,
    upload.single("image"),
    updateMovie
  );
router.delete('/delete/:id', authenticateJWT, deleteMovie);

module.exports = router;
