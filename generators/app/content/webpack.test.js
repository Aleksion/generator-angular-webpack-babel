/**
 * Webpack config for tests
 */
module.exports = require('./config/webpack.make')({
  BUILD: false,
  TEST: true
});
