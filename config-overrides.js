const path = require('path');

module.exports = function override(config) {
  config.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx', '.json']; // Add default extensions
  return config;
};