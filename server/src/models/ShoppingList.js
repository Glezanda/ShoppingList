const mongoose = require('mongoose');

const shoppingListSchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner: { type: String, required: true },
  members: { type: [String], required: true },
  items: { type: [{ name: String, quantity: Number, note: String }], required: true },
});

module.exports = mongoose.model('ShoppingList', shoppingListSchema);
