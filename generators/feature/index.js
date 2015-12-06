var generators = require('yeoman-generator');

module.exports  = generators.NameBase.extend({
  promptUser: function () {
    var done = this.async();

    // have Yeoman greet the user
    console.log(this.yeoman);

    var prompts = [
    {
      name: 'includeRun',
      message: "Should your feature have a run function?",
      default: true
    },
    {
      name: 'includeConfig',
      message: "Should your feature have a config function?",
      default: true
    }];

    this.prompt(prompts, function(props){
      this.includeRun = props.includeRun
      this.includeConfig = props.includeConfig

      done();
    }.bind(this))
  },
  scaffoldFolders: function () {
    this.mkdir(this.name)
  },
  copyMainFiles: function(){
    var context = {
      featureName: this.name,
      includeRun = this.includeRun,
      includeConfig = this.includeConfig
    }

    if(this.includeRun){
      this.template("_run.js", this.name + "/" +this.name +".run.js", context);
    }
    if(this.includeConfig){
      this.template("_config.js", this.name + "/" +this.name +".config.js", context);
    }
      this.template("_routes.js", this.name + "/" +this.name +".routes.js", context);
      this.template("_controller.js", this.name + "/" +this.name +".controller.js", context);
      this.template("_index.js", this.name + "/index.js", context);
  }
});
