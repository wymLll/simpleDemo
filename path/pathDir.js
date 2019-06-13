var path = require('path');
console.log(__dirname);   //e:\vsCode\jsdemo\path
console.log(__filename);  //e:\vsCode\jsdemo\path\pathDir.js

// 可以拼接字符串，但是会出错
console.log(__dirname,'src');   //e:\vsCode\jsdemo\path src 
console.log(__dirname,'\src');   //e:\vsCode\jsdemo\path src
console.log(__filename,'src');  //e:\vsCode\jsdemo\path\pathDir.js src

console.log(path.resolve(__dirname));   //e:\vsCode\jsdemo\path
console.log(path.resolve(__filename));  //e:\vsCode\jsdemo\path\pathDir.js

console.log(path.resolve(__dirname, '../'));   //e:\vsCode\jsdemo
console.log(path.resolve(__filename, '../'));  //e:\vsCode\jsdemo\pathDir.js

console.log(path.resolve(__dirname,'src'));  //e:\vsCode\jsdemo\path\src
console.log(path.resolve(__dirname,'src','lib'));  //e:\vsCode\jsdemo\path\src\lib