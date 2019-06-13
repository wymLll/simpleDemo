{
var a = b = 42;
// console.log(window.b);  //42
console.log(b); //42
console.log(a); //42
}

{
    // 解构
function getData(){
    return {
        a: 42,
        b: 32
    }
}

var {a,b} = getData();
var {c,d} = getData();
console.log(a,b,c,d);   //42 32 undefined undefined
}

{
    // 优先级
var e = 23;
var f = ++e;
console.log(e,f); //24 24
e = 23;
var g = e++;
console.log(e,g);   //24 23
}
{

console.log(typeof h);  //undefined
console.log('i: ',i); //undefined
var i = 0;

// TDZ
// typeof i; //ReferenceError: i is not defined
// let i;





let j ;
console.log(typeof j); //undefined
}

{
  var k = 10;
  switch (3) {
    case 1:
    case 2:
    default:
      console.log('default...');
    case 3:
      console.log(3);
    case 4:
      console.log(4);
      break;
    case 5:
      console.log(5);

    // result:3 4 直至break跳出
  }
}

{
  // new构造
  var l = function() {
    var n = 8888;
  };
  var m = new l();
  console.log(m); // l {}

  var o = function() {
    this.n = 9999;
  };
  var p = new o();
  console.log(p);   //o {n: 9999}
}

{
  var q = [];
  console.log(!q); //false  []是非假值
  var r = [1];
  console.log(!r);  //false

  var msg = 'hello';
  for (var i = 0; i < 10; i++) {
    var msg = 'hello' + i * 2 + i;
  }
  console.log(msg); //hello189
}

// function say(value) {
//   alert(value);
// }
// alert(say); //say函数
// alert(say('hi js.')); 