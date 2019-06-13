/**
 * 组合继承：实例属性屏蔽其原型的一些属性
 */

function Person(name){
    this.name = name
}

Person.prototype.sayName = function(){
    console.log(this.name);
}

function Singer(name, gender){
    Person.call(this, name) //继承属性
    this.gender = gender
}

//继承方法
Singer.prototype = Object.create(Person.prototype); //singer原型链接到person的原型
Singer.prototype.constructor = Singer

var singer = new Singer('alei', 'male')
singer.sayName() //alei


