/**
 * rest
 * 1. 函数参数中使用，将参数转存为数组
 */

let fun1 = function(arg1, ...args) {
  console.log(arg1); // 1
  console.log(args); // [ 2, 3, 4 ]
};

fun1(1, 2, 3, 4);

/**
 * array 扩展运算符
 * 1. 相当于concat的功能
 */

let numbers1 = [1, 2, 3];
let numbers2 = [...numbers1, 1, 4, 5];
console.log(numbers2);

/**
 * object 扩展运算符
 */

let tb = {
  website: 'www.xxx.com',
  owner: 'john',
  function: 'shopping'
};

let zfb = {
    ...tb,
    website: 'www.yyy.com',
}
let tb1 = {
    owner: 'dasiy',
    ...tb
}

console.log(zfb); // { website: 'www.yyy.com', owner: 'john', function: 'shopping' }
console.log(tb1); // { owner: 'john', website: 'www.xxx.com', function: 'shopping' }