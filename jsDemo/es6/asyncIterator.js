/**
 * Iterator：隐含着一个规定，next方法必须是同步的，只要调用就必须立刻返回值。
 * 异步解决方案：Generator 函数里面的异步操作，返回一个 Thunk 函数或者 Promise 对象
 */