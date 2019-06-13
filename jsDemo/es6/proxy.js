{
  //get()
  let person = {
    name: 'alei'
  };
  let handlers = {
    get: function(target, key) {
      if (key in target) return target[key];
      else throw new ReferenceError(key + ' does not exists');
    }
  };
  let proxy = new Proxy(person, handlers);

  console.log(proxy.name); //alei
  // console.log(proxy.age) //ReferenceError: age does not exists

  //get方法可以继承
  let obj = Object.create(proxy);
  console.log(obj.name); //alei
}

{
  /**
   * set()
   * 严格模式set不返回true将会报错
   */
  let vaidator = {
    set: function(target, key, value) {
      if (key === 'age') {
        if (!Number.isInteger(value)) {
          throw new TypeError('The age is not an integer');
        }
        if (value > 200) {
          throw new RangeError('The age seems invalid');
        }
      }
      target[key] = value;
    }
  };

  let person = new Proxy({}, vaidator);
  person.age = 100;
  console.log(person.age); // 100
  //   person.age = 'young'; // 报错
  //   person.age = 300; // 报错
}

{
  /**
   * apply()：拦截调用，call，apply
   */

  let target = function() {
    return 'called';
  };
  let handlers = {
    apply: function() {
      return 'i am the proxy';
    }
  };
  let p = new Proxy(target, handlers);
  console.log(p()); //i am the proxy
}
{
  /**
   * has()：拦截hasProperty操作
   */
  let handler = {
    has(target, key) {
      if (key[0] === '_') {
        return false;
      }
      return key in target;
    }
  };
  let target = { _prop: 'foo', prop: 'foo' };
  let proxy = new Proxy(target, handler);
  console.log('_prop' in proxy); // false
  console.log('prop' in proxy); // true
}
{
  /**
   * constructor()：拦截new命令
   * 返回值必须是对象
   */
  let p = new Proxy(function() {}, {
    construct: function(target, args) {
      return { value: args[0] * 10 };
    }
  });

  console.log(new p(1).value); // 10
}

{
  /**
   * deleteProperty()：用于拦截delete操作
   * 若返回值是false或抛出错误，delete失败
   */
  let handler = {
    deleteProperty(target, key) {
      invariant(key, 'delete');
      delete target[key];
      return true;
    }
  };
  function invariant(key, action) {
    if (key[0] === '_') {
      throw new Error(`Invalid attempt to ${action} private "${key}" property`);
    }
  }

  let target = { _prop: 'foo', name: 'del' };
  let proxy = new Proxy(target, handler);
  delete proxy.name;
  console.log(target); //{ _prop: 'foo' }
  //   delete proxy._prop; //Error: Invalid attempt to delete private "_prop" property
}
{
  /**
   * defineProperty()：拦截Object.Property
   * 目标对象不可扩展（non-extensible），则defineProperty不能增加目标对象上不存在的属性，否则会报错
   * 如果目标对象的某个属性不可写（writable）或不可配置（configurable），则defineProperty方法不得改变这两个设置。
   */
  let handler = {
    defineProperty(target, key, descriptor) {
      return false;
    }
  };
  let target = {};
  let proxy = new Proxy(target, handler);
  proxy.foo = 'bar'; // 不会生效
}
{
  /**
   * isExtensible()：拦截Object.isExtensible
   * 只能返回布尔值，否则返回值会被自动转为布尔值
   * 返回值必须与目标对象的isExtensible属性保持一致，否则就会抛出错误。
   */
  let target = {};
  let p = new Proxy(target, {
    isExtensible: function(target) {
      return true;
    }
  });

  console.log(Object.isExtensible(p)); // true
  console.log(Object.isExtensible(p) === Object.isExtensible(target)); //true
}

{
  /**
   * getOwnPropertyDescriptor()：拦截Object.getOwnPropertyDescriptor()
   * 返回一个属性描述对象或者undefined
   */

  let handler = {
    getOwnPropertyDescriptor(target, key) {
      if (key[0] === '_') {
        return;
      }
      return Object.getOwnPropertyDescriptor(target, key);
    }
  };
  let target = { _foo: 'bar', baz: 'tar' };
  let proxy = new Proxy(target, handler);
  console.log(Object.getOwnPropertyDescriptor(proxy, 'wat'));
  // undefined
  console.log(Object.getOwnPropertyDescriptor(proxy, '_foo'));
  // undefined
  console.log(Object.getOwnPropertyDescriptor(proxy, 'baz'));
  // { value: 'tar', writable: true, enumerable: true, configurable: true }
}
{
  /**
   * getPrototypeOf(): 拦截如下：
   * Object.prototype.__proto__
   * Object.prototype.isPrototypeOf()
   * Object.getPrototypeOf()
   * Reflect.getPrototypeOf()
   * instanceof
   * 返回值：对象或null
   */

  let proto = {};
  let p = new Proxy(
    {},
    {
      getPrototypeOf(target) {
        return proto;
      }
    }
  );
  console.log(Object.getPrototypeOf(p) === proto); // true
}
{
  /**
   * ownKeys()：拦截对象自身属性的读取操作
   * Object.getOwnPropertyNames()
   * Object.getOwnPropertySymbols()
   * Object.keys()
   * for...in循环
   */

  let target = {
    a: 1,
    b: 2,
    c: 3
  };

  let handler = {
    ownKeys(target) {
      return ['a'];
    }
  };

  let proxy = new Proxy(target, handler);

  console.log(Object.keys(proxy));
  // [ 'a' ]
}

{
  /**
   * preventExtensions()：拦截Object.preventExtensions
   * 必须返回boolean 否则强转
   * 只有目标对象不可扩展时（即Object.isExtensible(proxy)为false），proxy.preventExtensions才能返回true，否则会报错。
   */

  let proxy = new Proxy(
    {},
    {
      preventExtensions: function(target) {
        return true;
      }
    }
  );

  //   console.log(Object.preventExtensions(proxy)); //TypeError: 'preventExtensions' on proxy: trap returned truish but the proxy target is extensible

  let proxy1 = new Proxy(
    {},
    {
      preventExtensions: function(target) {
        Object.preventExtensions(target);
        return true;
      }
    }
  );

  console.log(Object.preventExtensions(proxy1)); // {}
}
{
  /**
   * setPrototypeOf()：拦截Object.setPrototypeOf
   */
  let handler = {
    setPrototypeOf(target, proto) {
      throw new Error('Changing the prototype is forbidden');
    }
  };
  let proto = {};
  let target = function() {};
  let proxy = new Proxy(target, handler);
  Object.setPrototypeOf(proxy, proto);
  // Error: Changing the prototype is forbidden
}
