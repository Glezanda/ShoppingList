// config/config.js
const config = {
    // Your application configuration settings (e.g., database connection, API keys)
  };
  
  module.exports = {
    db: {
      url: 'mongodb://localhost:27017/shopping-list-db' // MongoDB connection URL
    },
    resolve: {
      fallback: {
        "zlib": require.resolve("browserify-zlib"),
        "querystring": require.resolve("querystring-es3"),
        "path": require.resolve("path-browserify"),
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "http": require.resolve("stream-http")
      }
    }
  };
  

  