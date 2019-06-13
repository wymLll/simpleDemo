console.log(JSON.stringify("42"));
console.log(typeof JSON.stringify("42"));

console.log(typeof(-'4'));

var a =1;
var b = 2; 
// console.log(a += b);  //3
// console.log(a =+ b); //2

// console.log(a +++b);  //3
// console.log("a1: ",a);  //2
// console.log(a + ++b);  //5
// console.log("a2: ",a);  //2
// console.log(a + + +b);  //5
// console.log("a3: ",a);  //2
// console.log(a + + b);  //5

// console.log(Math.floor(-49.1))
// console.log(~~-49.1)


// console.log(49.1 | 0)
// console.log(-49.1 | 0)

// // 解析
// console.log(parseInt(103,2))


// 选择器运算符
// var h = 42;
// var x = "abs";
// var k = null;
// var kk = undefined;
// console.log( h && x)
// console.log( kk && k)


// 区分转换和解析
console.log(Number("42a"));
console.log(parseInt("42a"));
console.log("42a" == 42)