// const chalk=require('chalk');
// console.log(chalk.blue('hello'));

// import('chalk').then((chalk) => {
//     console.log(chalk.default.blue('hello'));  // Use chalk.default to access chalk methods
//   }).catch((error) => {
//     console.error('Error loading chalk:', error);
// });
  
// import chalk from 'chalk';
// // const chalk = require('chalk')  ;
// console.log(chalk.red.underline.inverse('hello'))

import validator from "validator";
// const validator=require('validator')
console.log(validator.isEmail('foo@bar.com')); 