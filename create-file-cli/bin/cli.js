#! /usr/bin/env node

var program = require('commander');
var child_process = require('child_process');
var package_info = require('../package.json');
let version = package_info.version;
program.version(version,'-v, --version')
program
    .command('init')
    .alias('i')
    .action(option => {
        console.log('==list==')
        child_process.execSync('npm config set @mfelibs:registry http://registry.cnpm.sina.com.cn/');
        child_process.execSync('npm config set @app:registry http://registry.cnpm.sina.com.cn/');
        child_process.execSync('npm config set registry https://registry.npm.taobao.org/');
        let stdout =  child_process.execSync('npm config list');
        console.log(stdout.toString());
    })

program.parse(process.argv);