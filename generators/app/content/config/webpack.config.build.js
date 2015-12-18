var webpack = require('webpack');
var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(ENV) {
  return {
    /**
     * Entry
     * Reference: http://webpack.github.io/docs/configuration.html#entry
     * Should be an empty object if it's generating a test build
     * Karma will set this when it's a test build
     */
    //context: path.resolve(__dirname),
    /**
     * Output
     * Reference: http://console.github.io/docs/configuration.html#output
     * Should be an empty object if it's generating a test build
     * Karma will handle setting it up for you when it's a test build
     */
    output: {
      // Absolute output directory
      path: __dirname + '/../dist',
      publicPath: '/',
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js',
      libraryTarget: 'umd',
      library: '[name]'
    },
    /**
     * Devtool settings
     * Reference: http://webpack.github.io/docs/configuration.html#devtool
     */
    devtool: 'source-map',
    /**
     * Plugins
     * Reference: http://webpack.github.io/docs/configuration.html#plugins
     * List: http://webpack.github.io/docs/list-of-plugins.html
     */
    plugins: [

      // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
      // Only emit files when there are no errors
      new webpack.NoErrorsPlugin(),

      // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
      // Dedupe modules in the output
      new webpack.optimize.DedupePlugin(),
    ]
  }
}
