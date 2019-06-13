class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayName(){
        console.log(this.name);
    }
}

class Student extends Person{
    constructor (name, age, school){
        super(name, age);
        this.school = school;
    }

    saySchool(){
        console.log(this.school);  
    }
}

let person = new Person();
console.log(person);
let student = new Student();
console.log(student);