/**
 * 两种方法：
 * 1. json: 正则，函数，symbol不能被正常复制循环引用会出错；JSON对于相同引用会别重复复制()。
 * 2. for...in加递归
 */

//方法一：json
let obj = {
  a: 12,
  b: /sd/, //{}
  c: [1, 2],
  d: function() {
    console.log('hello');
  }, //直接忽略
  f: {
    g: true,
    h: {
      i: 'str'
    }
  },
  j: Symbol('j') //忽略
};

console.log(JSON.parse(JSON.stringify(obj)));
// { a: 12, b: {}, c: [ 1, 2 ], f: { g: true, h: { i: 'str' } } }

// 对于相同引用，json拷贝后失效。
// {
//   let obj = { asd: 'asd' };
//   let obj2 = { name: 'aaaaa' };
//   obj.t1 = obj2;
//   obj.t2 = obj2;
//   let cp = JSON.parse(JSON.stringify(obj));
//   obj.t1.name = 'hello'; //obj1 = { asd: 'asd', t1: { name: 'hello' }, t2: { name: 'hello' } }
//   cp.t1.name = 'change'; //  cp = { asd: 'asd', t1: { name: 'change' }, t2: { name: 'aaaaa' } }
// }


// 方法2
function deepCopy(obj) {
  let result;
  if (typeof obj == 'object') {
    result = Array.isArray(obj) ? [] : {};
    for (let i in obj){
        result[i] = typeof obj[i] == 'object' ? deepCopy(obj[i]) : obj[i];
    }
      
  } else {
    result = obj;
  }
  return result;
}

console.log(deepCopy(obj));