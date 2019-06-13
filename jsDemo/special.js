/**
 * a==1 && a==2 && a==3 
 * 结果：true
 */
var i = 1;
var a = {
    toString: function(){return i++;}
}

console.log(a==1 && a==2 && a==3)   //true

/**
 *  a.x = a = {}
 *  .的优先级高于=
 */
a.x = a = {}
console.log(a.x === a)  //false
console.log(a)  //Object {}
console.log(a.x)   // undefined

/**
 * 结果：[1, NAN, NAN]
 * es5：radix = 0，采取十进制
 * es3：radix = 0，采取八进制
 * radix范围：2-36，为其他时解析结果为 NAN
 * parseInt中string的某个char大于radix-1时，解析结果为 NAN
 */
console.log(["1","2", "3"].map(parseInt));  //[1, NaN, NaN]
