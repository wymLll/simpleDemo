/**
 * 柯里化（Currying）是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，
 * 并且返回接受余下的参数且返回结果的新函数的技术。
 */

function curry(fn, args) {
  console.log('........分割线........');
  var len = fn.length; //fn参数的数目
  console.log(len, fn);
  var args = args || [];
  console.log(args);
  return function() {
    var newArgs = args.concat(Array.prototype.slice.call(arguments));
    console.log("newArgs: ", newArgs)
    if (newArgs.length < len) return curry.call(this, fn, newArgs);
    else return fn.apply(this, newArgs);
  };
}

function multiFn(a, b, c) {
  return a * b * c;
}

var multi = curry(multiFn);

console.log(multi(2)(3)(4));
console.log(multi(2, 3, 4));
console.log(multi(2)(3, 4));
console.log(multi(2, 3)(4));
