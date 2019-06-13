/**
 * generator：异步编程的完整解决方案
 *      函数体内数据交换
 *      错误处理机制
 */

function* generator(x) {
  try {
    var ex = yield 1;
    console.log(ex);
    var y = yield x + 2;
  } catch (e) {
    console.log('error：', e);
  }
  return y;
}

var gen1 = generator(1);
console.log(gen1.next()); // { value: 1, done: false }
console.log(gen1.next(3)); //3
gen1.throw('出错了'); //error： 出错了

/**
 * 实例：手动执行generator
 */
{
  var fetch = require('node-fetch');
  console.log(typeof fetch);
  function* gen() {
    let url = 'https://api.github.com/users/github';
    let result = yield fetch(url);
    console.log(' gen: ', result.bio);
  }

  let g = gen();
  let result = g.next();
  console.log(result.value); //Promise { <pending> }
  result.value
    .then(function(data) {
      console.log(result.value); //Promise {Response}
      return data.json();
    })
    .then(function(data) {
      console.log(data);
      g.next(data);
    });
}

/**
 * 实例：利用co自动执行generator
 */
{
  var fs = require('fs');
  var co = require('co'); //yield后面必须时promise或者thunk

  let readFile = function(fileName) {
    return new Promise(function(resolve, reject) {
      fs.readFile(fileName, function(error, data) {
        if (error) return reject(error);
        resolve(data);
      });
    });
  };

  let gen = function*() {
    let f1 = yield readFile('../src/a.js');
    let f2 = yield readFile('../src/b.js');
    console.log(f1.toString()); //console.log('hello ')
    console.log(f2.toString()); //console.log('alei')
  };
  co(gen);
}
