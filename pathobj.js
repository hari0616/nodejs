//path.parse() function in node js
const path=require('path');
var pathObj=path.parse(__filename);
console.log(pathObj);
//os freememory and total memory
const os=require('os');
var freememory=os.freemem();
var totalmemory=os.totalmem();
//console.log('Total memory:'+totalmemory);
//Template string without using string concattenation we using ES6 buitin function
//using backbit symbol
console.log(`Total Memory: ${totalmemory}`);
console.log(`Free Memory: ${freememory}`);
//os module file system for synchronous or block method
const fs=require('fs');
//const files=fs.readdirSync('./');//(./)represents the current folder
//console.log(files);//it shows many files are present in this current folder
fs.readdir('./',function(err,files){
if(err) console.log('Error',err);
else console.log('Result',files);
});// it print s same as the files but using the callback function