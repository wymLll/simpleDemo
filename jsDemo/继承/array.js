/**
 * 使用Object.create()
 */
function SubArray() {
  this.push.apply(this, arguments);
}

SubArray.prototype = Object.create(Array.prototype);

var arr = new Array(1, 2, 3);
console.log(arr); //[1,2,3]
console.log(arr.length); //3

var subArr = new SubArray(1, 2, 3);
console.log(subArr); //Array { '0': 1, '1': 2, '2': 3, length: 3 }

subArr[5] = 'alei';
console.log(subArr.length); //3

/**
 * 使用class
 */
class FulArray extends Array {}

var fulArr = new FulArray(1, 2, 3);
console.log(fulArr); //FulArray [ 1, 2, 3 ]

fulArr[5] = 'alei';
console.log(fulArr); //FulArray [ 1, 2, 3, <2 empty items>, 'alei' ]
console.log(fulArr.length); //6
