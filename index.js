// "use strict"

let arr = [1,2,3]
delete arr[2]
console.log(arr)

let obj = {
  1: 1,
  a: 12,
  a: 13,
  for: 4
}

console.log(obj) //{ '1': 1, a: 13 }
console.log(obj[1]) //1
console.log(obj.for) //4




// function ff(){
//   console.log(this)
// }
// ff(); //严格模式下undefined
let obj1 = {
  a: 1,
  f: function(){
    return this;
  }
}

console.log(obj1.f()) //{ a: 1, f: [Function: f] }

let reg = /Java(?! Script)([A-Z]\w*)/
console.log(reg.test('JavaScript')) //true
console.log(reg.test('JavaScripter')) //true
console.log(reg.test('Javascripter')) //false
console.log(reg.test('Javaccripter')) //false

console.log(parseInt(12, 0)) //12

