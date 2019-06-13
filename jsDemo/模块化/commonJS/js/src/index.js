/**
 * 服务器端实现：node.js
 * package.json: name不能用大写及中文
 * 同步方式加载模块
 */

// 引入核心模块不需要路径
var uniq = require('uniq')

// 引入自定义模块需要路径
var math = require('../modules/math')

console.log(math.add(1,2))  //3

console.log(uniq([1, 3, 1, 4, 3]))  //[1, 3, 4]
