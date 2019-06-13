// // 创建数组

// var arr = new Array();
// var arr = new Array(size);
// var arr = new Array(item0,item1,...);
// var arr = [item0,item1,...];

// // 添加数据到数组
// var len = arr.push(item);
// arr[arr.length] = item;
// var arrArr = arr.unshift(item0,item1,...);


// // 删除数组数据

// var arrItem = arr.pop();
// var arrItem = arr.shift()
// arr.length = size;

// // 数组排序
// arr.sort((v1,v2)=>v1-v2);
// arr.reverse();

// // 转换方法
// arr.toString(); //item0,iem1,...
// arr.toLocalString(); //item0,iem1,...每一项都调用toLocalString
// arr.valueOf(); //item0,iem1,...
// arr.join(','); //item0,iem1,...

// //数组合并与截取
// var arr2 = arr.concat(item,arr3);//将arr3的每一项放入数组，而非整个数组放入
// var arr2 = arr.slice(start,end); //arrCopy是arr从start到end的一个备份数组
// var arrCopy = arr.slice(0);//arrCopy 与 ar r内容一样但是地址不一样

// // 操作方法 sllice  splice

// arr.slice(-1) === slice(arr.length-1);
// var removedArr = arr.splice(startIndex, deleteSize, insertItem0, insertItem1,...);

// // 位置方法
// var index = arr.indexOf(item, startIndex);
// var lastIndex = arr.lastIndexOf(item, startIndex);

// // 迭代方法
// /**
//  * every() :每一项都满足某个条件----true
//  * filter():每一项都判断是否满足条件----满足项的数组
//  * forEach()：每一项分别进行操作
//  * map() ：对每一项都做同样的操作---数组
//  * some()：一项满足条件----true
//  */
// var everyBolean = arr.every(function(value, index, array){ return Boolean;})
// var someBolean = arr.some(function(value, index, array){ return Boolean;})
// var filterArr = arr.filter(function(value, index, array){ return item ? true:false;});
// var mapArr = arr.map(function(value, index, array){ return item * 2;})
// arr.forEach(function(value, index, array){//执行某些操作
// })
// //es6新增
// for(let index of arr.keys()){}
// for(let value of arr.values()){}
// for(let [index,value] of arr.entries()){}

// // 归并方法，例：数组每一项相加  reduceRight:从右向左
// var value = arr.reduce(function(prev, cur, index, array){return prev+cur;})

// //es6新增

// var arr = Array.of(2,3,4);//将伪数组转化为数组，st可以使用forEach
// /**
//  * 将其他对象转换成数组
//  *
//  * 1.部署了Iterator接口的对象，比如：Set（结果为：key1,value1...），Map，Array。
//  * 2.类数组对象，什么叫类数组对象，就是一个对象必须有length属性，没有length，转出来的就是空数组。
//  * 
//  * Array.from(arrayLike[, mapFn[, thisArg]])
//  */
// var arr = Array.from([1, 2, 3], (x) => x * x)
// // [1, 4, 9]
// var arr = Array.from('hello world')//字符串转为数组与string.split('')功能一致


// //填充数组
// arr.fill(value,startIndex,endIndex);

// //便利，迭代


// //指定复制
// /**
//  * target （必需）：从该位置开始替换数据。
//  * start （可选）：从该位置开始读取数据，默认为 0 。如果为负值，表示倒数。
//  * end （可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。
//  */
// arr.copyWithin(target, start, end )
// var arr = [1,2,3,4,5,6,7,8,9]
// console.log(arr.copyWithin(0,3,6));
// //Array(9) [4, 5, 6, 4, 5, 6, 7, 8, 9]

// arr.find(function(item){return itemCondition;})
// arr.includes(item);


// //判断是否是数组
// var arr=new Array("1","2","3","4","5");
// alert(typeof(arr));  // Object
// alert(arr instanceof Array);  //true
// function isArray(obj) {  
//     return Object.prototype.toString.call(obj) === '[object Array]';   
// }

// // 下面的函数调用都返回 true
// Array.isArray([]);
// Array.isArray([1]);
// Array.isArray(new Array());
// // 鲜为人知的事实：其实 Array.prototype 也是一个数组。
// Array.isArray(Array.prototype); 

// // 下面的函数调用都返回 false
// Array.isArray();
// Array.isArray({});
// Array.isArray(null);
// Array.isArray(undefined);
// Array.isArray(17);
// Array.isArray('Array');
// Array.isArray(true);
// Array.isArray(false);
// Array.isArray({ __proto__: Array.prototype });