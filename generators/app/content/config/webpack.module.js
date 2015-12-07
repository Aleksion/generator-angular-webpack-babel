'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(options){
  /**
   * Environment type
   * BUILD is for generating minified builds
   * TEST is for generating test builds
   */
  var BUILD = !!options.BUILD;
  var TEST = !!options.TEST;


  var module = {};

  /**
   * Will Initialize loaders
   */
  module.loaders = makeLoaders(options);

  /**
   * Will Initialize preLoaders
   */
  module.preLoaders = makePreLoaders(options);

  return module;

}

function makeLoaders(options){
  /**
   * Environment type
   * BUILD is for generating minified builds
   * TEST is for generating test builds
   */
  var BUILD = !!options.BUILD;
  var TEST = !!options.TEST;

  var loaders = [{
    // JS LOADER
    // Reference: https://github.com/babel/babel-loader
    // Transpile .js files using babel-loader
    // Compiles ES6 and ES7 into ES5 code
    test: /\.(js|jsx)$/,
    loader: 'babel',
    exclude: /node_modules/
  }, {
    // ASSET LOADER
    // Reference: https://github.com/webpack/file-loader
    // Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
    // Rename the file using the asset hash
    // Pass along the updated reference to your code
    // You can add here any file extension you want to get copied to your output
    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
    loader: 'file'
  }, {
    // HTML LOADER
    // Reference: https://github.com/webpack/raw-loader
    // Allow loading html through js
    test: /\.html$/,
    loader: 'raw'
  },
  {
    test: /\.css$/,
    // Reference: https://github.com/webpack/extract-text-webpack-plugin
    // Extract css files in production builds
    //
    // Reference: https://github.com/webpack/style-loader
    // Use style-loader in development for hot-loading
    loader: TEST ? 'null' : ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
  },
  {
       test: /\.scss$/,
       loaders: ["style", "css", "sass"]
  }
  ];

  return loaders
}

function makePreLoaders(options){
  /**
   * Environment type
   * BUILD is for generating minified builds
   * TEST is for generating test builds
   */
  var BUILD = !!options.BUILD;
  var TEST = !!options.TEST;

  var preLoaders = [];
  // ISPARTA LOADER
  // Reference: https://github.com/ColCh/isparta-instrumenter-loader
  // Instrument JS files with Isparta for subsequent code coverage reporting
  // Skips node_modules and files that end with .test.js
  if (TEST) {
    preLoaders.push({
      test: /\.js$/,
      exclude: [
        /node_modules/,
        /\.spec\.js$/
      ],
      loader: 'isparta-instrumenter'
    })
  }

  return preLoaders
}
