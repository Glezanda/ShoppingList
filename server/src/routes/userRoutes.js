// userRoutes.js

const express = require('express');
const router = express.Router();

// Sample data (replace with your actual database operations)
let users = [
  { id: "123", username: "user1", email: "user1@example.com" },
  { id: "234", username: "user2", email: "user2@example.com" },
  { id: "345", username: "user3", email: "user3@example.com" },
];

// GET /api/users - Fetch all users
router.get('/', (req, res) => {
  res.json(users);
});

// DELETE /api/users/:userId - Delete a user by ID
router.delete('/:userId', (req, res) => {
  const userId = req.params.userId;
  users = users.filter(user => user.id !== userId);
  res.sendStatus(200);
});

module.exports = router;
