// middleware/errorMiddleware.js
const errorMiddleware = (err, req, res, next) => {
    // Error handling logic goes here
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  };
  
  module.exports = errorMiddleware;
  