/**
 * 核心：用一个 F 空的构造函数去取代执行了 Parent 这个构造函数。
 */
function Parent(name) {
    this.name = name;
}

Parent.prototype.sayName = function(){
        console.log('parent name: ', this.name);
}

function Child(name, parentName){
    Parent.call(this, parentName);
    this.name = name;
}

// Object.create()模拟实现
// 创建一个对象，使用现有对象来提供新创建对象的__proto__
function create(proto){
    function F(){};
    F.prototype = proto;
    return new F();
}

Child.prototype = create(Parent.prototype);
Child.prototype.constructor = Child;
Child.prototype.sayName = function(){
    console.log('child name: ', this.name);
}


var parent = new Parent('father');
parent.sayName();    // parent name: father
console.log(parent);

var child = new Child('son', 'father');
child.sayName();
console.log(child);



