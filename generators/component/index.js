var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');
var path = require('path');

module.exports  = generators.NamedBase.extend({
  promptUser: function () {
    var done = this.async();

    var prompts = [
    {
      name: 'includeRun',
      message: "Should your directive have a run function?",
      default: false
    },
    {
      name: 'includeConfig',
      message: "Should your directive have a config function?",
      default: false
    },
    {
      name: 'bindToElement',
      message: "Should your directive be restricted to Element?",
      default: true
    },
    {
      name: 'bindToAttribute',
      message: "Should your directive be restricted to Attribute?",
      default: true
    }
  ];

    this.prompt(prompts, function(props){
      this.includeRun = props.includeRun
      this.includeConfig = props.includeConfig
      this.bindToElement = props.bindToElement
      this.bindToAttribute = props.bindToAttribute

      done();
    }.bind(this))
  },
  copyMainFiles: function(){
    this.destinationRoot(path.join('client/app/components', this.name));
    var context = {
      directiveName: this.name,
      includeRun : this.includeRun,
      includeConfig : this.includeConfig,
      bindToElement : this.bindToElement,
      bindToAttribute : this.bindToAttribute
    }

    if(this.includeRun){
      this.template("_run.js", this.name +".run.js", context);
    }
    if(this.includeConfig){
      this.template("_config.js", this.name +".config.js", context);
    }
      this.template("_tpl.html", this.name +".tpl.html", context);
      this.template("_directive.js", this.name +".directive.js", context);
      this.template("_controller.js", this.name +".controller.js", context);
      this.template("_index.js", "index.js", context);
      this.template("_.scss", this.name+".scss", context);
  }
});
