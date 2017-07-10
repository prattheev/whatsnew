const chalk = require('chalk');
const jsonfile = require('jsonfile');
const path = require('path');


exports.getDetails = function(pkg,callback){
   jsonfile.readFile(path.join(pkg + '/package.json'), function(er, obj) {
       var data = [obj.name, chalk.dim.white(obj.version)];
        try{ data.push(chalk.dim.white(obj.author.name)); }
        catch(err) { data.push(obj.author==undefined?chalk.dim.bgCyan(" Contributors "):chalk.dim.white(obj.author)); }   
       callback(data);
   });
};