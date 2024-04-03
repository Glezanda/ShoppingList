// models/ShoppingList.js
const mongoose = require('mongoose');

const shoppingListSchema = new mongoose.Schema({
  name: { type: String, required: true },
  items: [{ type: String }]
});

module.exports = mongoose.model('ShoppingList', shoppingListSchema);
