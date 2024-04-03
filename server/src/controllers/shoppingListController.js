// controllers/shoppingListController.js
const ShoppingListService = require('../services/shoppingListService');

// Controller logic for handling shopping list related operations
// Example:
const getShoppingLists = async (req, res) => {
  try {
    const shoppingLists = await ShoppingListService.getAllShoppingLists();
    res.json(shoppingLists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getShoppingLists,
  // Add other controller functions for CRUD operations, etc.
};
