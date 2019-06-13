/**
 * async: generator的语法糖
 * 1. async自带执行器，即不需要co
 * 2. 更好的语义
 * 3. 更广的适用性：co需要yield后面必须时thunk或promise
 * 4. 函数返回值是promise
 * 5. async函数内部return语句返回的值，会成为then方法回调函数的参数
 * 6. async函数内部抛出错误，会导致返回的promise变为reject状态
 * 7. async函数返回的promise对象，必须等到内部的所有await命令后面的promise对象执行完才会发生状态改变，除非return|throw error，
 *    也即async内部的异步操作都完成，才会执行then方法指定的函数回调
 */

var fs = require('fs');
var readFile = function(fileName) {
  return new Promise(function(resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

{
  //自动执行
  let asyncReadFile = async function() {
    let f1 = await readFile('../src/a.js');
    let f2 = await readFile('../src/b.js');
    console.log(f1.toString()); //console.log('hello ')
    console.log(f2.toString()); //console.log('alei')
  };
  asyncReadFile();
}
{
  //实例
  //   function timeout(ms) {
  //     return new Promise(resolve => {
  //       setTimeout(resolve, ms);
  //     });
  //   }
  //由于async函数返回promise，可以作为await的参数，上面函数可以写成下面形式

  async function timeout(ms) {
    await new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }
  async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
  }

  asyncPrint('hello world', 5000);
}

{
  //async函数的return
  async function f() {
    return 'alei';
  }

  f().then(v => {
    console.log(v); //alei
  });
}

{
  /**
   * 错误处理机制
   * async函数内部抛出错误，会导致返回的promise变为reject状态
   */

   async function t(){
       throw new Error('error!')
   }
   t().then(
       v=>console.log(v),
       e=>console.log(e), // error!
   )

}
