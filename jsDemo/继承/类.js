class Person{
    constructor(name){
        this.name = name
        this.friends = ['nannan']
    }
    sayName(){
        console.log(this.name)
    }
}

class Singer extends Person{
    constructor(name, age){
        super(name)
        this.age = age
    }
    sayAge(){
        console.log(this.age)
    }
}

var singer = new Singer('alei', '18')
singer.sayAge(); //18
singer.sayName(); //alei
singer.friends.push('yeye')
console.log(singer.friends)//[ 'nannan', 'yeye' ]

var person = new Person('aha')//[ 'nannan' ]
console.log(person.friends)