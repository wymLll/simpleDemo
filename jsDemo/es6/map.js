/**
 * map本质允许把额外信息value关联到对象key上，而无需把这个信息放入对象内
 */
var m = new Map()

let x = {id: '1'}
let y = {id: '2'}
let z = {id: '3'}

m.set(x, 'alei')
m.set(y, 'yeye')
m.set(z, 'xuxu')

let it = m[Symbol.iterator]();
console.log(it.next())
console.log(it.next())
// { value: [ { id: '1' }, 'alei' ], done: false }
// { value: [ { id: '2' }, 'yeye' ], done: false }


m.delete(z)
console.log(m.size); //2


console.log(m.keys()); //[Map Iterator] { { id: '1' }, { id: '2' } }
console.log(m.values()); //[Map Iterator] { 'alei', 'yeye' }
console.log(m.entries()) //[Map Iterator] { [ { id: '1' }, 'alei' ], [ { id: '2' }, 'yeye' ] }

console.log(m.has(1)) //false
console.log(m.has(x)) //true

//m2等价m3
var m2 = new Map(m.entries()); 
var m3 = new Map(m)


console.log(m[Symbol.iterator]) //[Function: entries]