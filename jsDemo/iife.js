// {
//   let a = 0;

//   (function iife() {
//     a++;
//     console.log(a); //1
//   })();

//   console.log(a);   //1
// }

// {
//   let a = 0;

//   (function iife() {
//     let a = 1;
//     a++;
//     console.log(a); //2
//   })();

//   console.log(a);   //0
// }

var z = 2;
(function(){
  var x = y = 1;
  if(typeof z === 'undefined'){ //此处z提升了
   var z = 0; 
  }else{
    var z = 3;
  }
  console.log(z); //0
})()

console.log(z); //2
console.log(y); //1
// console.log(x); ReferenceError: x is not defined
