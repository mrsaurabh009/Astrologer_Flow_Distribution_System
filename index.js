const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/assign', require('./routes/assign'));
app.use('/api/astrologers', require('./routes/astrologers')); // ✅ Only use this route once
app.use('/api/astrologer', require('./routes/astrologer'));    // ✅ If this is different, keep it, otherwise remove

app.use('/api/distribute', require('./routes/distribute'));

// Error Handler Middleware
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

// Root Endpoint
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Server listen
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// ✅ Export app for testing purposes
module.exports = app;
