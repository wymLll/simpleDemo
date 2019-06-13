var fav = {
    name: 'alei',
    age: 18,
    [Symbol('singer')]: 'hi'
}

console.log(Object.getOwnPropertyNames(fav)) //无论是否可以枚举[ 'name', 'age' ]
console.log(Object.getOwnPropertySymbols(fav))//[ Symbol(singer) ]
console.log(fav.hasOwnProperty('name'))//true

let obj = {
    1: 12,
    2: 12,
    name: 'alei',
    auc: 'can'
}

for(let a in obj) console.log(a);

for(let a of Object.keys(obj)) console.log(a);