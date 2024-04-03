// config/routes.js
const express = require('express');
const router = express.Router();

// Import route handlers for different resources
const shoppingListRoutes = require('../routes/shoppingListRoutes');
const userRoutes = require('../routes/userRoutes');

// Define API routes
router.use('/shopping-lists', shoppingListRoutes);
router.use('/users', userRoutes);

module.exports = router;
