var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
   this.spawnCommand('git', ['clone', 'https://github.com/Aleksion/angular-webpack-starter.git']);
   this.spawnCommand('rm',['rm', '-rf', '.git']);
});
