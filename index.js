// "use strict"
//String()
{
  let fn = function sayMor() {
    this.info = 'morning';
  };
  console.log(typeof []); //object
  console.log(String(1)); //1
  console.log(String('1')); //1
  console.log(String(true)); //true
  console.log(String(undefined)); //undefined
  console.log(String(null)); //null
  console.log(String('"' + undefined + '"')); //"undefined"
  console.log(String(fn)); //function sayMor(){this.info = "morning"}
  console.log(typeof fn); //function sayMor(){this.info = "morning"}
  console.log(String('"' + fn + '"')); //"function sayMor(){this.info = "morning"}"
}

{
  console.log(typeof typeof 12);  //string
  console.log(typeof aa); //undefined
}

// console.log(aa);  //ReferenceError: aa is not defined


console.log('xx' instanceof String)


//console.log(++3); //ReferenceError: Invalid left-hand side expression in prefix operation

console.log(null === null)
console.log(undefined === undefined)
console.log(0 === -0)

// console.log(a=3)

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


let array = [,,,]
console.log(array)
console.log(0 in array) //false

array = [1,,2,3]
console.log(array)
console.log(1 in array) //false
console.log(array[1]) //undefined


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