// controllers/userController.js
const UserService = require('../services/userService');

// Controller logic for handling user related operations
// Example:
const getUsers = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUsers,
  // Add other controller functions for CRUD operations, etc.
};

