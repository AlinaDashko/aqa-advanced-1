import colorPrint from 'chalk';

const stringVariable = "Hello, World!";
const numberVariable = 18;
const booleanVariableTrue = true;
const nullValue = null;
let undefinedVariable;

console.log(colorPrint.blue(stringVariable));
console.log(colorPrint.red(numberVariable));
console.log(colorPrint.green(booleanVariableTrue));
console.log(colorPrint.yellow(nullValue));
console.log(colorPrint.bold(undefinedVariable));