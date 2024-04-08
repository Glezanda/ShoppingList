const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Sample data (to be replaced with database implementation)
let shoppingLists = [];

// Create Shopping List endpoint
app.post('/shoppingList/create', (req, res) => {
  const { name } = req.body;

  // Validate input
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  // Logic to create shopping list (to be replaced with actual implementation)
  const newShoppingList = {
    id: shoppingLists.length + 1,
    name
    // Add other properties as needed
  };
  shoppingLists.push(newShoppingList);

  res.status(201).json({ shoppingList: newShoppingList });
});

// Get Shopping List endpoint
app.get('/shoppingList/get', (req, res) => {
  res.json({ shoppingLists });
});

// Get Shopping List Detail endpoint
app.get('/shoppingList/getDetail/:id', (req, res) => {
  const { id } = req.params;

  // Find the shopping list by id (to be replaced with actual implementation)
  const shoppingList = shoppingLists.find(list => list.id === parseInt(id));

  if (!shoppingList) {
    return res.status(404).json({ error: 'Shopping list not found' });
  }

  res.json({ shoppingList });
});

// Update Shopping List endpoint
app.post('/shoppingList/update/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  // Validate input
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  // Find the shopping list by id (to be replaced with actual implementation)
  const shoppingList = shoppingLists.find(list => list.id === parseInt(id));

  if (!shoppingList) {
    return res.status(404).json({ error: 'Shopping list not found' });
  }

  // Update shopping list (to be replaced with actual implementation)
  shoppingList.name = name;
  // Update other properties as needed

  res.json({ shoppingList });
});

// Delete Shopping List endpoint
app.delete('/shoppingList/delete/:id', (req, res) => {
  const { id } = req.params;

  // Find the index of the shopping list by id (to be replaced with actual implementation)
  const index = shoppingLists.findIndex(list => list.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: 'Shopping list not found' });
  }

  // Remove the shopping list from the array
  shoppingLists.splice(index, 1);

  res.json({ success: true });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
