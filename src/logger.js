const chalk = require('chalk');

function info(message) {
  console.log(chalk.blue('ℹ️ INFO:'), message);
}

function success(message) {
  console.log(chalk.green('✅ SUCCESS:'), message);
}

function warning(message) {
  console.log(chalk.yellow('⚠️ WARNING:'), message);
}

function error(message) {
  console.error(chalk.red('❌ ERROR:'), message);
}

module.exports = {
  info,
  success,
  warning,
  error,
};