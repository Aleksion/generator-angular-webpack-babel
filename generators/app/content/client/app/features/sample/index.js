import angular from 'angular';
import uirouter from 'angular-ui-router';

// Import base modules
import config from './sample.config';
import routes from './sample.routes';
import controller from './sample.controller';
import service from './sample.service';

// Import internal modules


export default angular.module('app.sample', [uirouter])
  .config(config)
  .config(routes)
  .controller(controller.UID, controller)
  .service(service.UID(), service)
  .name;
