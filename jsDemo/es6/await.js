/**
 * 1. await命令后面是一个 Promise 对象，返回该对象的结果
 * 2. 如果不是 Promise 对象，就直接返回对应的值。
 * 3. await命令后面是一个thenable对象（即定义then方法的对象），那么await会将其等同于 Promise 对象。
 * 4. await命令后面的 Promise 对象如果变为reject状态，则reject的参数会被catch方法的回调函数接收到。
 * 5. 任何一个await语句后面的 Promise 对象变为reject状态，那么整个async函数都会中断执行。
 *    解决方法：将出错的await try-cache起来，或者await后面的promise在根一个catch
 * 6. 多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。
 * 7. async 函数可以保留运行堆栈。
 */

{
  //2
  async function a() {
    // 等同于 return 123;
    return await 123;
  }

  a().then(v => console.log(v)); //123
}
{
  //4
  async function b() {
    await Promise.reject('出错了');
  }
  b()
    .then(v => console.log(v))
    .catch(e => console.log('catch: ', e)); //catch:  出错了
  // 出错了
}
{
  //5：await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中

  async function c() {
    await Promise.reject('出错了1').catch(e => console.log(e));
    await Promise.reject('出错了2').catch(e => console.log(e));
    let f = await Promise.resolve('alei');
    console.log('f: ', f); // f:  alei
    return await Promise.resolve('hello world');
  }

  c().then(v => console.log(v));
  // 出错了1
  // 出错了2
  // hello world
}

{
  //6
  // let [foo, bar] = await Promise.all([getFoo(), getBar()]);
}

{
  /**
   * 并发实例
   * 
   * 只有async函数内部是继发执行，外部不受影响
   */
  async function logInOrder(urls) {
    // 并发读取远程URL
    const textPromises = urls.map(async url => {
      const response = await fetch(url);
      return response.text();
    });

    // 按次序输出
    for (const textPromise of textPromises) {
      console.log(await textPromise);
    }
  }
}
