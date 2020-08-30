const validateNpmPackageName = require('validate-npm-package-name');
const chalk = require('chalk');

async function create(appName){
    const cwd = process.cwd();//current working directory
    // 检查 appName 是否合法
    const validateNameRes = validateNpmPackageName(appName)
    if (!validateNameRes.validForNewPackages) {
    console.error(chalk.red(`😭Invalid project name: "${appName}"😭`))
    validateNameRes.errors && validateNameRes.errors.forEach(err => {
        console.error(chalk.red.bold('Error: ' + err))
    })
    validateNameRes.warnings && validateNameRes.warnings.forEach(warn => {
        console.error(chalk.red.bold('Warning: ' + warn))
    })
    process.exit(1)
    } 
}

module.exports = function (appName){
    return create(appName).catch(err => {
        console.error(chalk.red(`create error`, err))
        process.exit(1)
    })
}