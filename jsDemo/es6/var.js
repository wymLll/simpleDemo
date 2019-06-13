// it's var
// 我是全局作用域的： it's var

var con = true;
while (con) {
  var s = "it's var";
  console.log(s);
  con = false;
}
console.log('我是全局作用域的：', s);

{
  let arr = [];
  for (var i = 0; i < 3; i++) {
    let j = i; //或者var
    arr.push(j);
  }
  console.log(arr); //[ 0, 1, 2 ]

  let arr1 = [];
  for (var i = 0; i < 3; i++) {
    arr1.push(i); //
  }
  console.log(arr1); //[ 0, 1, 2 ]
}

{
  // TDZ
  // console.log(typeof b);  //ReferenceError: b is not defined
  let b;
  console.log(typeof b); //undefined

  // 隐藏的TDZ
  var x = x;
  console.log('x: ', x); //undefined
  let y;
  console.log('y: ', y); //undefined
  // let x = x;  // ReferenceError: x is not defined
}

{
  // for循环比较特殊，（）内的是一个父作用域，{}是子作用域
  for (let i = 0; i < 3; i++) {
    let i = 'a';
    console.log(i); //a a a
  }
  for (var i = 0; i < 3; i++) {
    var i = 'a';
    console.log(i); //a a a
  }
}

{
  // 块级作用域内不建议声明函数，建议函数表达式
  function foo(){}
}
console.log(foo) //[Function: foo]

{
  // let与函数声明（严格模式）都只能作用于当前作用域顶层
  if(true) var x = 1;
  // 块作用域必须有大括号
  if(true) let x = 1  //出错: SyntaxError: Lexical declaration cannot appear in a single-statement context
}

