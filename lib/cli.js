const whatsnew = require('commander');
const chalk = require('chalk');
const jsonfile = require('jsonfile');
const path = require('path');
const Parse = require('./parse');

var version="";
  
jsonfile.readFile(path.join(__dirname + '/../package.json'), function(err, obj) {
    version = obj.version;
    whatsnew
      .version(chalk.bold.green(version))
      .description(chalk.bold.blue("Shows 'What's new' at all installed packages"))
      .usage('')
      .parse(process.argv);
      if(!whatsnew.args.length) Parse.dependencies(obj,process.cwd()+'/node_modules/');
});