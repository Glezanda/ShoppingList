// models/User.js
const mongoose = require('mongoose');

// Define schema for user
const userSchema = new mongoose.Schema({
  // Define schema fields
  // Example:
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
