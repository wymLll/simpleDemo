/**
 * 本质：call，apply
 * 缺点：函数无法复用
 */

function Person(name){
    this.name = name
    this.sayName = function(){
        console.log(this.name);
    }
}

function Singer(name, gender){
    Person.call(this, name)
    this.gender = gender
}

var singer = new Singer('alei','male')

singer.sayName(); //alei
console.log(singer.gender) //male