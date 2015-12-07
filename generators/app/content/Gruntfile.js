module.exports = function(grunt) {
	require("matchdep").filterAll("grunt-*").forEach(grunt.loadNpmTasks);
	var webpack = require("webpack");
	var webpackConfig = require("./config/webpack.make.js");

  var buildConfig = webpackConfig({BUILD:true, TEST:false, GRUNT:true})
  var devConfig = webpackConfig({BUILD:false, TEST:false, GRUNT:true})


	grunt.initConfig({
		webpack: {
			options: {},
			build: buildConfig,
			"build-dev": devConfig
		},
		webpack_server: {
			server:{
				options: devConfig
			}
		},
		watch: {
			app: {
				files: ["client/**/*"],
				tasks: ["webpack:build-dev"],
				options: {
					spawn: false,
				}
			}
		}
	});

	// The development server (the recommended option for development)
	grunt.registerTask("default", ["webpack_server"]);

	// Build and watch cycle (another option for development)
	// Advantage: No server required, can run app from filesystem
	// Disadvantage: Requests are not blocked until bundle is available,
	//               can serve an old app on too fast refresh
	grunt.registerTask("dev", ["webpack:build-dev", "watch:app"]);

	// Production build
	grunt.registerTask("build", ["webpack:build"]);
};
