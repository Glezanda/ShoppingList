// app.js
const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON
app.use(express.json());

// Example route for creating a user
app.post('/api/users', [
  // Input data validation middleware
  body('username').notEmpty(),
  body('password').notEmpty(),
  body('email').isEmail(),
  body('role').isIn(['admin', 'user']),
  // Authorization middleware
  // You can implement your own logic here to check if the user is authorized to perform this action
], (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Process request and create user
  // Replace this with your actual implementation logic
  const newUser = {
    id: '123456',
    username: req.body.username,
    email: req.body.email,
    role: req.body.role
  };

  // Return created user
  res.status(201).json({ user: newUser });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
