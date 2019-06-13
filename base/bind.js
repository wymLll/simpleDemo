/**
 * 1. 创建一个函数并返回
 * 2. 第一个参数作为它运行时的this
 * 3. 其余参数传递给下层函数
 * 4. 返回的函数可以使用new操作符创建对象：此时bind指定的this失效，但是传入的参数依然生效
 */

Function.prototype.bind2 = function(context) {
  if (typeof this != 'function') {
    throw Error('not a function');
  }

  let fn = this;  //fn 指向绑定函数
  let args = [...arguments].slice(1);
  let tmp = function() {};

  let resFn = function() {
    // 当作为构造函数时，this 指向实例
    // 当作为普通函数时，this 指向 window
    return fn.apply(
      this instanceof tmp ? this : context,
      args.concat(...arguments) //此处arguments是使用resFn时返回的函数的参数
    );
  };

  // 实现继承
  tmp.prototype = this.prototype;
  resFn.prototype = new tmp();

  return resFn;
};
