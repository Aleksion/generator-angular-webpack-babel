// Import Style
import './app.scss';

import angular from 'angular';
import uirouter from 'angular-ui-router';

// Import base modules
import config from './app.config';
import routes from './app.routes';
import run from './app.run';

// Import internal modules
import sampleModule from './features/sample';

angular.module('app', [uirouter, sampleModule])
  .config(config)
  .config(routes)
  .run(run);
