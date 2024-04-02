const express = require('express');
const bodyParser = require('body-parser');
const shoppingListRoutes = require('./routes/shoppingListRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/shopping-lists', shoppingListRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
