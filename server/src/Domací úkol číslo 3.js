const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Mock data for the shopping list
let shoppingList = [];

// Endpoint to get the shopping list
app.get('/api/shopping-list', (req, res) => {
    res.json(shoppingList);
});

// Endpoint to add an item to the shopping list
app.post('/api/shopping-list', (req, res) => {
    const newItem = req.body;
    shoppingList.push(newItem);
    res.status(201).json(newItem);
});

// Endpoint to delete an item from the shopping list
app.delete('/api/shopping-list/:id', (req, res) => {
    const id = req.params.id;
    shoppingList = shoppingList.filter(item => item.id !== id);
    res.sendStatus(204);
});

// Serve static files (if needed)
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
