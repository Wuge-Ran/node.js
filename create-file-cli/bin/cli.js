#! /usr/bin/env node

var program = require('commander');
var child_process = require('child_process');
var package_info = require('../package.json');
const chalk = require('chalk');
const ora = require('ora');

const spinner = ora();

let version = package_info.version;
program
.version(version,'-v, --version')

program
    .command('init')
    
    .alias('i')
    .action(() => {
        console.log('==init==')
        child_process.execSync('npm config set @mfelibs:registry http://registry.cnpm.sina.com.cn/');
        child_process.execSync('npm config set @app:registry http://registry.cnpm.sina.com.cn/');
        child_process.execSync('npm config set registry https://registry.npm.taobao.org/');
        let stdout =  child_process.execSync('npm config list');
        console.log(stdout.toString());
    })
//git快速指令
program
    .command('push [commit]')
    .action(commit => {
        spinner.text = `${chalk.green('👼👼pushing... 👼👼')}${commit}`
       
        if(!commit){
            spinner.text = chalk.red.dim(`😭不存在commit，'默认renew',以后建议手动添加commit😭`)
            commit = 'renew';
        }
        spinner.start();
        child_process.execSync('git add .');
        child_process.execSync(`git commit -m '${commit}'`);
        child_process.execSync('git push');
        spinner.stop();
        console.log(chalk.green('👼👼push done 👼👼'),commit);
    })


program.parse(process.argv);