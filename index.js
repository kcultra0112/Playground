const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to my Express app!' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});