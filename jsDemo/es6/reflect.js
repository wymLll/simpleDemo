/**
 * 设计目的：
 * 1. 将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上
 * 2. 修改某些Object方法的返回结果，让其变得更合理
 * 3. 让Object操作都变成函数行为
 * 4. Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法
 * 5. 很多操作读写更方便
 */

{
  /**
   * Reflect.apply()
   */
  // 老写法
  console.log(Function.prototype.apply.call(Math.floor, undefined, [1.75])); // 1
  // 新写法
  console.log(Reflect.apply(Math.floor, undefined, [1.75])); // 1
}

{
  /**
   * Reflect.get(target, name, receiver)
   * target必须是对象
   */

  let myObject = {
    foo: 1,
    bar: 2,
    get baz() {
      return this.foo + this.bar;
    }
  };

  console.log(Reflect.get(myObject, 'foo')); // 1
  console.log(Reflect.get(myObject, 'bar')); // 2
  console.log(Reflect.get(myObject, 'baz')); // 3

  let myReceiverObject = {
    foo: 4,
    bar: 4
  };
  // baz属性部署了读取函数（getter），则读取函数的this绑定receiver。
  console.log(Reflect.get(myObject, 'baz', myReceiverObject)); // 8
}

{
  /**
   * Reflect.set(target, name, value, receiver)
   */

  let myObject = {
    foo: 1,
    set bar(value) {
      return (this.foo = value);
    }
  };

  console.log(myObject.foo); // 1

  Reflect.set(myObject, 'foo', 2);
  console.log(myObject.foo); // 2

  Reflect.set(myObject, 'bar', 3);
  console.log(myObject.foo); // 3

  // 如果name属性设置了赋值函数，则赋值函数的this绑定receiver。
  var myReceiverObject = {
    foo: 0
  };

  Reflect.set(myObject, 'bar', 1, myReceiverObject);
  console.log(myObject.foo); // 3
  console.log(myReceiverObject.foo); // 1

  //Reflect传receiver，触发defineProperty
  let p = {
    a: 'a'
  };

  let handler = {
    set(target, key, value, receiver) {
      console.log('set');
      Reflect.set(target, key, value, receiver);
    },
    defineProperty(target, key, attribute) {
      console.log('defineProperty');
      Reflect.defineProperty(target, key, attribute);
    }
  };

  let obj = new Proxy(p, handler);
  obj.a = 'A';
  // set
  // defineProperty
  console.log(p.a); //A
}
{
  /**
   * Reflect.has(obj, name)
   */

  let myObject = {
    foo: 1
  };

  console.log('foo' in myObject); // true
  console.log(Reflect.has(myObject, 'foo')); // true
}
{
  /**
   * Reflect.deleteProperty(obj, name)
   */
  const myObj = { foo: 'bar', zre: 'bar' };

  delete myObj.foo;
  Reflect.deleteProperty(myObj, 'zre');

  console.log(myObj); // {}
}

{
  /**
   * Reflect.construct(target, args)
   */

  function Greeting(name) {
    this.name = name;
  }

  const instance = new Greeting('lh');
  console.log(instance); //Greeting { name: 'lh' }
  const instance2 = Reflect.construct(Greeting, ['alei']);
  console.log(instance2); //Greeting { name: 'alei' }
}

{
  /**
   * Reflect.getPrototypeOf(obj)
   * Reflect.getPrototypeOf和Object.getPrototypeOf的一个区别是，
   * 如果参数不是对象，Object.getPrototypeOf会将这个参数转为对象，然后再运行，而Reflect.getPrototypeOf会报错
   */
  const myObj = new Greeting();

  console.log(Object.getPrototypeOf(myObj) === Greeting.prototype); //true
  console.log(Reflect.getPrototypeOf(myObj) === Greeting.prototype); //true
}

{
  /**
   * Reflect.setPrototypeOf(obj, newProto) -> boolean(true, false)
   * 如果第一个参数是undefined或null，都会报错。
   * 如果第一个参数不是对象，Object.setPrototypeOf会返回第一个参数本身，而Reflect.setPrototypeOf会报错
   */
  const myObj = {};

  console.log(Object.setPrototypeOf(1, Array.prototype)); //1
  Reflect.setPrototypeOf(myObj, Array.prototype);
}
{
  /**
   * Reflect.apply(func, thisArg, args)
   */
  const ages = [11, 33, 12, 54, 18, 96];

  // 旧写法
  const youngest = Math.min.apply(Math, ages);
  const oldest = Math.max.apply(Math, ages);
  const type = Object.prototype.toString.call(youngest);

  // 新写法
  const youngest1 = Reflect.apply(Math.min, Math, ages);
  const oldest1 = Reflect.apply(Math.max, Math, ages);
  const type1 = Reflect.apply(Object.prototype.toString, youngest, []);
}
{
  /**
   * Reflect.defineProperty(target, propertyKey, attributes)
   * 第一个参数必须是对象
   */
  function MyDate() {
    /*…*/
  }

  // 旧写法
  Object.defineProperty(MyDate, 'now', {
    value: () => Date.now()
  });

  // 新写法
  Reflect.defineProperty(MyDate, 'now', {
    value: () => Date.now()
  });
}
{
  /**
   * Reflect.getOwnPropertyDescriptor(target, propertyKey)
   */
  let myObject = {};
  Object.defineProperty(myObject, 'hidden', {
    value: true,
    enumerable: false
  });

  // 旧写法
  console.log(Object.getOwnPropertyDescriptor(myObject, 'hidden')); // { value: true, writable: false, enumerable: false, configurable: false }
  console.log(Reflect.getOwnPropertyDescriptor(myObject, 'hidden')); // { value: true, writable: false, enumerable: false, configurable: false }
}

{
  /**
   * Reflect.isExtensible (target)
   */
  const myObject = {};

  console.log(Object.isExtensible(myObject)); // true
  console.log(Reflect.isExtensible(myObject)); // true
}
{
  /**
   * Reflect.preventExtensions(target)
   */
  let myObject = { a: 12 };

  console.log(Object.preventExtensions(myObject)); // { a: 12 }
  console.log(Reflect.preventExtensions(myObject)); // true
}
{
  /**
   * Reflect.ownKeys (target)
   * 基本等同于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和
   */
  let myObject = {
    1: 'alei',
    2: 'yeye',
    foo: 1,
    bar: 2,
    [Symbol.for('baz')]: 3,
    [Symbol.for('bing')]: 4
  };

  Object.defineProperty(myObject, 'hidden', {
    value: true,
    enumerable: false
  });

  console.log(Object.getOwnPropertyNames(myObject)); // [ '1', '2', 'foo', 'bar', 'hidden' ]
  console.log(Object.getOwnPropertySymbols(myObject)); // [ Symbol(baz), Symbol(bing) ]

  console.log(Reflect.ownKeys(myObject)); // [ '1', '2', 'foo', 'bar', 'hidden', Symbol(baz), Symbol(bing) ]
  console.log(Object.keys(myObject));// [ '1', '2', 'foo', 'bar' ]
  for(let a in myObject) console.log(a) // 1, 2, foo, bar
}
