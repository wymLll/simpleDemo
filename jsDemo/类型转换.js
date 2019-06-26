console.log(JSON.stringify('42'));
console.log(typeof JSON.stringify('42'));

console.log(typeof -'4');

var a = 1;
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
console.log(Number('42a')); //NaN
console.log(parseInt('42a')); //42
console.log('42a' == 42); //false

{
 //原始基本类型不是任何对象的实例
  console.log(null instanceof Object); //false
  console.log('xx' instanceof String); //false
  console.log('xx' instanceof Object); //false
  console.log(true instanceof Boolean); //false
  console.log(true instanceof Object); //false
  console.log(1 instanceof Object); //false
  console.log({} instanceof Object); //true


  console.log(typeof typeof 12); //string

  //没有定义变量的时候
  console.log(typeof aa); //undefined
  //console.log(aa);  //ReferenceError: aa is not defined

  //console.log(++3); //ReferenceError: Invalid left-hand side expression in prefix operation

  console.log(null === null); //true
  console.log(undefined === undefined); //true
  console.log(0 === -0); //true
}
