
function Person(){
    this.name = 'alei'
    this.friends = ['nanana']
}

Person.prototype.sayName = function(){
    console.log(this.name);
}

function Singer(){
    this.name = 'singerAlei'

}

/**
 * 本质：重写子类的原型
 */
Singer.prototype = new Person();


var singer = new Singer();
singer.sayName(); //singerAlei
singer.friends.push('yeye');

console.log(singer.friends) //[ 'nanana', 'yeye' ]