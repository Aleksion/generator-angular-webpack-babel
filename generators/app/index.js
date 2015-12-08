var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');

module.exports = generators.Base.extend({
  promptUser: function () {
    var done = this.async();

    // have Yeoman greet the user

    var prompts = [
    {
      name: 'name',
      message: "What is the name of the app you're building? "
    },
    {
      name: 'description',
      message: "Provide an app description: "
    }];

    this.prompt(prompts, function(props){
      this.name = props.name
      this.description = props.description

      done();
    }.bind(this))
  },
  scaffoldFolders: function(){
    mkdirp.sync("bower_components");
    mkdirp.sync("client");
    mkdirp.sync("client/assets");
    mkdirp.sync("client/assets/fonts");
    mkdirp.sync("client/assets/images");
    mkdirp.sync("client/app");
    mkdirp.sync("client/app/components");
    mkdirp.sync("client/app/features");
    mkdirp.sync("client/app/shared");
  },
  copyContent: function(){
    this.directory('../content', '.');
  },
  copyMainFiles: function(){
    var context = {
      appName: this.name,
      appDescription : this.description
    }

    this.copy('../../../README.md', 'README.md');
    this.template("_bower.json", 'bower.json', context);
    this.template("_package.json", 'package.json', context);
    this.template("_index.html", 'client/index.html', context);
  },
  installDependencies: function(){
    this.npmInstall();
  }

});
