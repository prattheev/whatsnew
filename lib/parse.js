const fs = require('fs');
const Pkg = require('./pkg');
const chalk = require('chalk');
const Table = require('cli-table');

exports.dependencies = function(pkg,path){
    var packages = Object.keys(pkg.dependencies);
    var i;
    var table = new Table({
    head: [chalk.bold.white('Package Name'), chalk.bold.white('Version'), chalk.bold.white('Author'), chalk.bold.white('Changelogs')]
    , colWidths: [20, 12, 25, 20]
    , chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
         , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
         , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
         , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
    });
    for (i in packages){
        Pkg.getDetails(path+packages[i], function(pkgdata){
            var wData=pkgdata;
            if (fs.existsSync(path + wData[0] + '/CHANGELOG.md')) wData.push(chalk.dim.bgGreen(" Yes "));
            else wData.push(chalk.dim.white(chalk.dim.bgMagenta(" NA ")));
            
            wData[0]=chalk.dim.white(wData[0]);
            table.push(wData);
            if(table.length==packages.length) console.log(table.toString());
        });
    }
};