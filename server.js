const express = require('express');
const mongoose = require('mongoose');
//const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const movieRoutes = require('./routes/movies');
const port = 3000
dotenv.config();

const app = express();
app.use(express.json()); // To parse JSON data

//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log("MongoDB connection error:", err));

// Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/movies', movieRoutes);

//const PORT = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
