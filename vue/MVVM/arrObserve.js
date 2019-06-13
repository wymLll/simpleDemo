/**
 * 对于数组，如果对其每一个元素进行defineProperty，会导致复杂度增加和代码执行效率降低
 *
 * 通过重写数组的方法
 */
{
  const arrMeths = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
  ];
  const arrAugms = [];

  arrMeths.forEach(method => {
    arrAugms[method] = function() {
      // 监听操作
      console.log('我被改变啦');
      // 调用对应方法
      return Array.prototype[method].apply(this, arguments);
    };
  });

  var arr = [1, 2, 3];
  arr.__proto__ = arrAugms;
  arr.pop();
  console.log(arr);
}

{
  class FakeArray extends Array {
    push(...args) {
      console.log('我被改变啦');
      return super.push(...args);
    }
  }

  var list = [1, 2, 3];

  var arr = new FakeArray(...list);

  console.log(arr.length);

  arr.push(3);

  console.log(arr);
}
