// app.js
const express = require('express');
const requestLogger = require('./requestLogger');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// Use Morgan for advanced logging
app.use(morgan('combined'));

// Use the custom requestLogger middleware
app.use(requestLogger);

// Define a sample route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
