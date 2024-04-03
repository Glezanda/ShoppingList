// middleware/authMiddleware.js
const authMiddleware = (req, res, next) => {
    // Authentication logic goes here
    // Example: Check if the user is authenticated
    if (req.isAuthenticated()) {
      next();
    } else {
      res.status(401).json({ error: 'Unauthorized' });
    }
  };
  
  module.exports = authMiddleware;
  