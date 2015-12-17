var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = function(ENV, options) {
  return {
    /**
     * Resolve
     * Make bower_components available for the resolvers
     */
    resolve: {
      root: [path.join(__dirname, "./bower_components")],
      alias: {
        appConstants: "./" + ENV + ".constants.js"
      }
    },
    /**
     * Entry
     * Reference: http://webpack.github.io/docs/configuration.html#entry
     * Should be an empty object if it's generating a test build
     * Karma will set this when it's a test build
     */
    entry: {
      app: './client/app/app.js'
    },
    /**
     * ESLint
     * use the .eslint config
     * optionally enable autofix to force rules
     */
    eslint: {
      configFile: '.eslintrc',
      //fix: true
    },
    /**
     * Output
     * Reference: http://console.github.io/docs/configuration.html#output
     * Should be an empty object if it's generating a test build
     * Karma will handle setting it up for you when it's a test build
     */
    output: {
      // Absolute output directory
      path: __dirname + '/../dist',
      publicPath: 'http://localhost:' + options.devServerPort+"/",
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js'
    },
    /**
     * Devtool settings
     * Reference: http://webpack.github.io/docs/configuration.html#devtool
     */
    devtool: '#eval-module-source-map',
    /**
     * PostCSS
     * Reference: https://github.com/postcss/autoprefixer-core
     * Add vendor prefixes to your css
     */
    postcss: [
      autoprefixer({
        browsers: ['last 2 version']
      })
    ],
    /**
     * Dev server configuration
     * Reference: http://webpack.github.io/docs/configuration.html#devserver
     * Reference: http://webpack.github.io/docs/webpack-dev-server.html
     */
    devServer: {
      contentBase: '../dist',
      stats: {
        modules: false,
        cached: false,
        colors: true,
        chunk: true,
        inline: true,
        progres: true,
        hot: true
      },
      port: options.devServerPort
    },
    /**
     * Loaders
     * Reference: http://webpack.github.io/docs/configuration.html#module-loaders
     * List: http://webpack.github.io/docs/list-of-loaders.html
     * This handles most of the magic responsible for converting modules
     */
    module: {
      preloaders: [],
      loaders: [{
        // JS LOADER
        // Reference: https://github.com/babel/babel-loader
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: [/node_modules/, /bower_components/]
      },
      {
        // ASSET LOADER
        // Reference: https://github.com/webpack/file-loader
        // Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
        // Rename the file using the asset hash
        // Pass along the updated reference to your code
        // You can add here any file extension you want to get copied to your output
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: "file-loader?name=[name].[ext]"
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
        loader: ExtractTextPlugin.extract('style',
          'css?sourceMap!postcss')
      },
      {
       // Sass Loader
       test: /\.scss$/,
       loaders: ["style", "css", "sass"]
      },
      {
        // ESLint loader
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: [/node_modules/, /bower_components/]
      }]
    },
    /**
     * Plugins
     * Reference: http://webpack.github.io/docs/configuration.html#plugins
     * List: http://webpack.github.io/docs/list-of-plugins.html
     */
    plugins: [

      // Reference: https://github.com/webpack/extract-text-webpack-plugin
    // Extract css files
    // Disabled when in test mode or not in build mode
      new ExtractTextPlugin('[name].css', {
      }),
      new ngAnnotatePlugin({
        add: true,
        // other ng-annotate options here
      }),
      new webpack.ResolverPlugin(
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(
          "../bower.json", ["main"])
      ),
      new HtmlWebpackPlugin({
        template:'./client/index.html',
        inject: 'body'
      })
    ]
  }
}
