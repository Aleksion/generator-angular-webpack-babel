/**
 * Webpack config for development
 */
module.exports = require('./config/webpack.make')({
  BUILD: false,
  TEST: false
});
