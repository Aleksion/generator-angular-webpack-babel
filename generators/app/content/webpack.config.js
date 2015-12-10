

var program = require('commander');

program
  .option('-inline, --inline', 'Whether to run with auto refresh')
  .option('-p, --production', 'Whether to run for production')
  .option('-bail, --bail', 'Whether to bail on error')
  .option('-build, --build', 'Whether to run for build')
  .option('-test, --test', 'Whether to run for test')
  .option('-type, --type <type>', 'The environment to run it in', 'local')
  .parse(process.argv);



/**
 * Webpack config for development
 */
module.exports = require('./config/webpack.make')({
  BUILD: !!program.build,
  TEST: !!program.test,
  ENVIRONMENT: program.type
});
