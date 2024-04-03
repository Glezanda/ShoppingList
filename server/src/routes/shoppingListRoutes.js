const express = require('express');
const router = express.Router();
const ShoppingList = require('../models/ShoppingList');

// GET all shopping lists
router.get('/', async (req, res) => {
  try {
    const shoppingLists = await ShoppingList.find();
    res.json(shoppingLists);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST a new shopping list
router.post('/', async (req, res) => {
  try {
    const { name, items } = req.body;
    const newShoppingList = new ShoppingList({ name, items });
    await newShoppingList.save();
    res.status(201).json(newShoppingList);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
