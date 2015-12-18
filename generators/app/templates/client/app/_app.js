// Import Style
import './app.scss';

import angular from 'angular';
import uirouter from 'angular-ui-router';

// Import base modules
import config from './app.config';
import routes from './app.routes';
import run from './app.run';
import appConstants from 'appConstants';

// Import internal modules
import sampleModule from './features/sample';

export default angular.module('<%=appName%>', [uirouter, sampleModule])
  .config(config)
  .config(routes)
  .constant("AppConstants", appConstants)
  .run(run)
  .name;
