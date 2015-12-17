'use strict';

// Modules
var _ = require('lodash');

var defaultConfig = require('./webpack.config.default');
var buildConfig = require('./webpack.config.build');
var moduleConfig = require('./webpack.config.module');
var serveConfig = require('./webpack.config.serve');
var testConfig = require('./webpack.config.test');

module.exports = function makeWebpackConfig(options) {
  /**
   * Environment type
   * BUILD is for generating minified builds
   * TEST is for generating test builds
   */
  var TYPE = options.TYPE;
  var ENV = options.ENVIRONMENT;
  var configOptions = {
    devServerPort: 8080
  };

  // Prepare config object
  var config = defaultConfig(ENV, configOptions);

  switch (TYPE) {
    case 'build':
    var newConfig = buildConfig(ENV, configOptions);
    // Make sure to apply modules plugins first
    config.plugins = newConfig.plugins.push.apply(newConfig.plugins, config.plugins);
    merge(config, newConfig);
    break;
    case 'build-module':
      var newConfig = moduleConfig(ENV, configOptions);
      // Make sure to apply modules plugins first
      config.plugins = newConfig.plugins.push.apply(newConfig.plugins, config.plugins);
      merge(config, newConfig);
      break;
    case 'serve':
      console.log("running serve");
      merge(config, serveConfig(ENV, configOptions));
      break;
    case 'test':
      config = testConfig(ENV, configOptions);
      break;
    default:
      console.log("running default")
  }

  return config;

};

/**
 * Helper funciton for merging configs
 * @param  {[type]} destination [description]
 * @param  {[type]} source      [description]
 */
function merge(destination, source){
  _.merge(destination, source, function(a, b) {
    if (_.isArray(a)) {
      return a.concat(b);
    }
  });
}
