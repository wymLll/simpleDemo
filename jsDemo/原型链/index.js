{
    //  node
    function foo() {
      this.a = 12;
    }
  
    var foo1 = new foo();
  
    console.log(foo1.__proto__); //foo{}
    console.log(foo1.__proto__.__proto__); //{}
    console.log(foo1.__proto__.__proto__.__proto__); //null
  
    console.log(foo1.__proto__ === foo.prototype); //true
    console.log(foo.prototype); // foo{}
  
    console.log(foo.__proto__ instanceof Function); //false
    console.log(foo.__proto__ instanceof Object); //true
    console.log(foo.prototype instanceof Object); //true
  
    console.log(foo.prototype); // foo{}
    console.log(foo.prototype.constructor); // [Function: foo]
  
    // 普通对象的__proto__指向 Object.prototype
    console.log(foo.prototype.__proto__ === Object.prototype); //true
  
    // 构造函数的__proto__指向Function.prototype ==> [Function]
    console.log(foo.__proto__ === Function.prototype); //true
    console.log(Object.__proto__ === Function.prototype); //true
    console.log(Object.__proto__); //[Function]
    console.log(Object.__proto__ === Object.prototype); //false
  
    // 原型链最终链到Object.prototype ===> 神奇的一部分
    console.log(Function.__proto__ === Function.prototype); //true
    console.log(Function.prototype.__proto__ === Object.prototype); //true
    console.log(Object.prototype.__proto__); //null
  
    /**
     * instanceof：obj.__proto__.__proto__... === Constructor.prototype来验证obj是否是Constructor的实例。
     */
    // Object为构造函数
    console.log(Object instanceof Function); // true
    // 上面成立的本质：原型链的一节
    console.log(Object.__proto__ === Function.prototype); // true
  
    // 此处Object和上面的Object不一致。
    console.log(Function instanceof Object); // true
    // 上面成立的本质：原型链的两节
    console.log(Function.__proto__ === Function.prototype); // true
    console.log(Function.prototype.__proto__ === Object.prototype); // true
  }
  