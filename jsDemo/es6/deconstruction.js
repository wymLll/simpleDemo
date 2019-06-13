function foo() {
  return {
    a: 12,
    b: 13
  };
}

{
  /**  对象 -> 对象+数组  */

  let { a: x, b: y } = foo();
  console.log(x, y); //12 13
  // console.log(a,b)  //ReferenceError: a is not define

  let arr = [];
  ({ a: arr[1], b: arr[0] } = foo());
  console.log(arr); //Array(2) [13, 12]
}

{
  // 交换！！！！
  let x = 1,
    u = 2;
  [x, u] = [u, x];
  console.log(x); //2
  console.log(u); //1
}

{
  //重复赋值
  let { a: x, a: y } = { a: 1 };
  console.log(x); //1
  console.log(y); //1

  let {
    a: { x: X, x: Y },
    a
  } = { a: { x: 1 } };
  console.log(a); //Object {x: 1}
  console.log(X); //1
  console.log(Y); //1

  //引用情况
  ({
    a: x,
    a: y,
    a: [z]
  } = { a: [1] });
  x.push(2);
  y[0] = 10;
  console.log(x); //Array(2) [10, 2]
  console.log(y); //Array(2) [10, 2]
  console.log(z); //1
}

{
  //解构赋值表达式

  let o = { a: 12, b: 13 };
  let p = ({ a, b } = o);
  console.log(p === o); //true
  console.log(a);

  let arr = [1, 2, 3];
  let q = ({ x, y } = arr);
  console.log(q === arr); //true

  ({ a } = { b } = o);
  [,x] = [y,z,,l,m = 'a'] = arr; //也可以有默认值
  console.log(a, b); //12,13
  console.log(x, y, z, l, m); //2 1 2 undefined a
}


var o = {[Symbol.toStringTag]: "wao", [Symbol.toStringTag]: "yooh"}
console.log(o) //yooh {Symbol(Symbol.toStringTag): "yooh"}