

var program = require('commander');

program
  .option('-inline, --inline', 'Whether to run with auto refresh')
  .option('-p, --production', 'Whether to run for production')
  .option('-progress, --progress', 'Whether to display progress')
  .option('-bail, --bail', 'Whether to bail on error')
  .option('-type, --type <type>', 'Whether to build as module', 'default')
  .option('-env, --env <env>', 'The environment to run it in', 'local')
  .parse(process.argv);

/**
 * Webpack config for development
 */
module.exports = require('./config/webpack.make')({
  TYPE: program.type,
  ENVIRONMENT: program.env
});
