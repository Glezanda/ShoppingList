const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the client folder
app.use(express.static(path.join(__dirname, 'client')));

// Define API route
app.get('/api/data', (req, res) => {
  const data = {
    message: 'Hello from server!'
  };
  res.json(data);
});

// Handle other routes by serving index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
