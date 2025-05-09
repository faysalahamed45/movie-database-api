const express = require("express");
const router = express.Router();
const { createMovie, getMovies, getMovie, updateMovie, deleteMovie } = require("../controllers/movieController");
const authenticateJWT = require('../middleware/authMiddleware');

const multer = require("multer");
const { storage } = require("../utils/cloudinary"); // ✅ use cloudinary
const upload = multer({ storage });

// Routes
router.post("/create", authenticateJWT, upload.single("image"), createMovie);
router.put("/update/:id", authenticateJWT, upload.single("image"), updateMovie);
router.get("/allmovie", authenticateJWT, getMovies);
router.get("/search/:id", authenticateJWT, getMovie);
router.delete("/delete/:id", authenticateJWT, deleteMovie);

module.exports = router;