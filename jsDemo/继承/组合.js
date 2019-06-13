/**
 * 核心：构造函数继承属性，原型链继承方法
 */
function Person(name){
    this.name = name
    this.friends = ['nannan']
}

Person.prototype.sayName = function(){
    console.log(this.name);
}

function Singer(name, gender){
    Person.call(this, name) //继承属性
    this.gender = gender
}

//继承方法
Singer.prototype = new Person()
Singer.prototype.constructor = Singer

Singer.prototype.sayGender = function(){
    console.log(this.gender);
}

var singer1 = new Singer('alei', 'male') 
singer1.friends.push('xuxu')
console.log(singer1.friends)//[ 'nannan', 'xuxu' ]
singer1.sayName()//alei
singer1.sayGender()//male

var singer2 = new Singer('yeye', 'male')
singer2.friends.push('ranran')
console.log(singer2.friends)//[ 'nannan', 'ranran' ]
singer2.sayName()//yeye
singer2.sayGender()//male