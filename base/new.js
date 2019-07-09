/**
 * 实现new操作符
 * 1. 创建一个对象
 * 2. 对象的__proto__绑定函数的prototype
 * 3. this指向新创建的对象,并且要执行一次构造函数
 * 4. 如果函数没有返回对象，那么new表达式中的函数调用将返回该对象的引用
 */

 function New(fn){
    var res = {};
    if(fn.prototype){
        res.__proto__ = fn.prototype;
    }
    var ret = fn.apply(res, Array.prototype.slice.call(arguments, 1));

    if((typeof ret === 'object' || typeof ret === 'function') && ret != null ) return ret;
    return res;
 }

 // fn有返回对象
function sayHi(name){
    this.name = name;
    return {};
}
// fn未返回对象
function sayHello(name){
    this.name = name;
}
// fn未返回非对象
function sayWow(){
    return "wow";
}


//標准的new方法
var Jone = new sayHi('Jone');
console.log(Jone);  //{}
var Celi = new sayHello('Celi');
console.log(Celi);  //sayHello { name: 'Celi' }
var wow = new sayWow();
console.log(wow);   //sayWow {}

//實現的new方法
var newSayHi = New(sayHi, 'jone');
console.log(newSayHi);  //{}
var newSayHello = New(sayHello, 'celi');
console.log(newSayHello);   //sayHello { name: 'celi' }
var wow = New(sayWow);
console.log(wow);   //sayWow {}