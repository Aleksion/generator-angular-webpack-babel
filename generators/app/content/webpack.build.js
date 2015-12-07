/**
 * Webpack config for builds
 */
module.exports = require('./config/webpack.make')({
  BUILD: true,
  TEST: false
});
