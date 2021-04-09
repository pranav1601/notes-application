// const fs=require('fs')
// const utils=require('./utils.js')
const notes=require('./notes.js')
const validator=require('validator')
const chalk=require('chalk')
// // fs.writeFileSync('notes.txt','my name is pranav')

// fs.appendFileSync('notes.txt','my name is still pranav agarwal')


console.log(notes())

console.log(validator.isURL('gmail'))

console.log(chalk.red.inverse.bold('Success'))