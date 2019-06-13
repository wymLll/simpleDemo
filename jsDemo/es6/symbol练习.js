/**
 * 结论：
 * 1.必须都由symbol.for()构造
 * 2.for(description)中两个description一直
 * ==>
 * 两个symbol才===
 */



{let s1 = Symbol();
let s2 = Symbol()

let s3 = Symbol("foo");
// let s4 = Symbol("doo")

// console.log(s1);
// console.log("s2: "+s2.toString());
// console.log(s3);
// console.log("s4: "+s4.toString());

let s5 = Symbol.for("foo");
console.log("s5: ",s5,"s3: ",s3,"s5===s3: ",s5===s3);
let s6 = Symbol.for("s3");
console.log("s6: ",s6,"s3: ",s6,"s6===s3: ",s6===s3);

let s7 = Symbol.for("foo");
console.log("s7: ",s7,"s5: ",s5,"s7===s5: ",s7===s5);
let s8 = Symbol.for("s5");
console.log("s8: ",s8,"s5: ",s5,"s8===s5: ",s8===s5);
}


// {
// let a1 = Symbol.for("a1");
// let a2 = Symbol.for("a1");
// console.log("a1===a2: ",a1===a2);
// console.log("a1: ",a1);
// console.log("a2: ",a2);
// }


// {
// let b1 = Symbol.for("sss");
// let b2 = Symbol.for("b1");
// console.log("b1: ",b1,"b2: ",b2);

// console.log("b1===b2: ",b1===b2);

// }


// .for("xxx"):xxx相同为ture
// {
//     let c1 = Symbol.for("sss");
//     let c2 = Symbol.for("sss");
//     console.log("c1: ",c1,"c2: ",c2);
    
//     console.log("c1===c2: ",c1===c2);
    
//     }
    
var arr = [2,1,4,5];
var ss = arr.sort((v1,v2)=>v1-v2);

console.log(arr);
console.log("ss===arr",ss === arr);