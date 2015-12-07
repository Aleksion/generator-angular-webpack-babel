import angular from 'angular';
import uirouter from 'angular-ui-router';

// Import base modules
import config from './sample.config';
import routes from './sample.routes';

// Import internal modules


export default angular.module('app.sample', [uirouter])
  .config(config)
  .config(routes)
  .name;
