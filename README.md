# Angular-Webpack-Babel Generator

[![Dependency Status](https://david-dm.org/Foxandxss/angular-webpack-workflow/status.svg)](https://david-dm.org/Foxandxss/angular-webpack-workflow#info=dependencies) [![devDependency Status](https://david-dm.org/Foxandxss/angular-webpack-workflow/dev-status.svg)](https://david-dm.org/Foxandxss/angular-webpack-workflow#info=devDependencies)

This generator is Heavily inspired by [Foxandxss's angular-webpack-workflow](https://github.com/Foxandxss/angular-webpack-workflow) - he is to have all the credit. I merely needed a generator for a few internal projects - and I tweaked it to suit my particular needs and requirements.

Since Foxandxss passes on all credit to Cesar Andreau, I respectfully do the same.
Taken from Foxandxss original README:
> It is a direct port of the amazing [react workflow](https://github.com/cesarandreu/web-app) of [Cesar Andreu](https://github.com/cesarandreu). All the credits goes for him.


## Features

* Heavily commented webpack configuration with reasonable
* ES6, and ES7 support with babel.js.
* Source maps included in all builds.
* Development server with live reload.
* Browsersync for easy mobile testing
* Production builds with cache busting and asset minification.
* Testing environment using karma to run tests and jasmine as the framework.
* Code coverage when tests are run.
* No gulp and no grunt, just npm run-scripts.
* Flowtype enabled
* Suggested application structure
* Generator for both app wide features and components


## Installation

### Requirements
The project also requires a MINIMUM of node v. 0.12.0. I recommend installing the latest version.
First of all, make sure you have installed all the requirements to run the project:

Install ``yo``, ``grunt-cli``, ``webpack``, ``karma``, ``eslint``, ``babel-eslint``
```shell
npm install -g yo grunt-cli webpack karma eslint babel-eslint
```

Install the ``generator-angular-webpack-starter``:
```shell
npm install -g generator-angular-webpack-starter
```

### Usage
Make a new directory and ``cd``into it:
```shell
mkdir my-new-directory && cd $_
```

Run ``yo angular-webpack-starter``:
```shell
yo angular-webpack-starter
```

### Scripts

All scripts are run with `npm run [script]`, for example: `npm run test`.

* `build` - will run both build:module and build:dist
* `build:dist` - will build and minify the app to the dist folder with dependencies,
* `build:module`- will build and minify the app to the lib folder. This is for usage as a module in other applications. Without dependencies.
* `serve` - start development server with local configuration, try it by opening `http://localhost:8080/` or the browserSync version at `http://localhost:3000/``
* `serve:dev` - development server with development configuration
* `serve:prod`- development server with production configuration
* `test` - run all tests
* `test:live` - continuously run unit tests watching for changes

See what each script does by looking at the `scripts` section in [package.json](./package.json).

Local, Develop and Production configuration can be configured in the following files in `client/app/`:
```
local.constants.js
dev.constants.js
prod.constants.js
```
Webpack will automatically know which one to use based on the serve parameter provided.
### Sub-generators
* [angular-webpack-starter:feature]
* [angular-webpack-starter:component]

#### Feature
Will generate a new feature within a folder from the directory that you are currently in:
```shell
yo angular-webpack-starter:feature featureName
```

To include the feature in the application, simply add the following to your app.js
and include it in the module:
```javascript
import featureName from './features/featureName';

angular.module('app', [uirouter, featureName])
  .config(config)
  .config(routes)
  .run(run);
```

you can test the feature by trying to navigate to: http://localhost:3000/#/featureName

#### Component
Will generate a new component within a folder from the directory that you are currently in:
```shell
yo angular-webpack-starter:component componentName
```

To include the feature in the application, simply add the following to your app.js or one of your features and include it in its module and include it in the module:
```javascript
import componentName from './components/componentName';

angular.module('app', [uirouter, componentName])
  .config(config)
  .config(routes)
  .run(run);
```

Note that to keep app.js as lean as possible it is recommended to only import features in the modules that depend on them.

You can test the component by adding the following to one of your incorporating features tpl.html files:
```html
<component-name></component-name>
```

## Extra tools

### [ESLint](http://eslint.org/)
ESLint is integrated in the project and is configurable through the .eslintrc
file. All rules have been disabled by default.
To enforce and automatically fix ESLint rules, enable fix in the eslint settings in config/webpack.make.js file. It is disabled by default.

```javascript
/**
 * use the .eslint config
 * optionally enable autofix to force rules
 */
 config.eslint = {
   configFile: '.eslintrc',
   fix: true
 }
```

### [Flow](http://flowtype.org/)
Flow has also been integrated in the project. It is completely optional, but will enable editors to intelligently warn you about errors and offer auto completion on flow documented functions and classes. Read more about how to set it up on the official flow page [here](http://flowtype.org/)


## Example and tutorial
Foxandxss has provided some excellent material on how to write Angular with ES6, which I have mostly strived to adhere to in the generator.

It's generally a good introctory read: [angular-tips](http://angular-tips.com/blog/2015/06/using-angular-1-dot-x-with-es6-and-webpack/)

## License

The license of this workflow is MIT.
