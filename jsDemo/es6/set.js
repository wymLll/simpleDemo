/**
 * add本质允许把额外信息value关联到对象key上，而无需把这个信息放入对象内
 */
var s = new Set()

let x = {id: '1'}
let y = {id: '2'}
let z = {id: '3'}

s.add(x)
s.add(y)
s.add(z)

let it = s[Symbol.iterator]();
console.log(s[Symbol.iterator]) //[Function: values]
console.log(it.next())
console.log(it.next())
// { value: { id: '1' }, done: false }
// { value: { id: '2' }, done: false }


s.delete(z)
console.log(s.size); //2


console.log(s.keys()); //[Set Iterator] { { id: '1' }, { id: '2' } }
console.log(s.values()); //[Set Iterator] { { id: '1' }, { id: '2' } }
console.log(s.entries()) //[Set Iterator] { { id: '1' }, { id: '2' } }

console.log(s.has(1)) //false
console.log(s.has(x)) //true

//m2等价m3
var m2 = new Set(s.values()); 
var m3 = new Set(s)
