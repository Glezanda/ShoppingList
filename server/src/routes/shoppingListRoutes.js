const express = require('express');
const router = express.Router();
const Joi = require('joi');
const ShoppingList = require('../models/ShoppingList');

// Validation schema
const shoppingListSchema = Joi.object({
  name: Joi.string().required(),
  owner: Joi.string().required(),
  members: Joi.array().items(Joi.string()).required(),
  items: Joi.array().items(Joi.object({
    name: Joi.string().required(),
    quantity: Joi.number().integer().min(1).required(),
    note: Joi.string().allow('').optional(),
  })).required(),
});

// Create shopping list
router.post('/create', async (req, res, next) => {
  try {
    const { error } = shoppingListSchema.validate(req.body);
    if (error) throw new Error(error.details[0].message);

    const shoppingList = await ShoppingList.create(req.body);
    res.status(201).json(shoppingList);
  } catch (err) {
    next(err);
  }
});

// Get all shopping lists
router.get('/', async (req, res, next) => {
  try {
    const shoppingLists = await ShoppingList.find();
    res.json(shoppingLists);
  } catch (err) {
    next(err);
  }
});

// Get shopping list by ID
router.get('/:id', async (req, res, next) => {
  try {
    const shoppingList = await ShoppingList.findById(req.params.id);
    if (!shoppingList) {
      return res.status(404).json({ error: 'Shopping list not found' });
    }
    res.json(shoppingList);
  } catch (err) {
    next(err);
  }
});

// Update shopping list
router.put('/:id', async (req, res, next) => {
  try {
    const { error } = shoppingListSchema.validate(req.body);
    if (error) throw new Error(error.details[0].message);

    const shoppingList = await ShoppingList.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!shoppingList) {
      return res.status(404).json({ error: 'Shopping list not found' });
    }
    res.json(shoppingList);
  } catch (err) {
    next(err);
  }
});

// Delete shopping list
router.delete('/:id', async (req, res, next) => {
  try {
    const shoppingList = await ShoppingList.findByIdAndDelete(req.params.id);
    if (!shoppingList) {
      return res.status(404).json({ error: 'Shopping list not found' });
    }
    res.json({ message: 'Shopping list deleted successfully' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
