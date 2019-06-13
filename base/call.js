/**
 * 1. 将函数设为对象的属性
 * 2. 执行，删除这个函数
 * 3. 指定this到函数并传入给定参数后执行函数
 * 4. 如果不传入参数，默认指向window
 */

 Function.prototype.call2 = function(context = window){
     let args = [...arguments].slice(1);
     context.fn = this; //绑定this
     let result = context.fn(...args);  //绑定this，并且执行
     delete context.fn;
     return result;
 }

 let foo = {value : 1};

 function bar(name, age){
     console.log(name);
     console.log(age);
     console.log(this.value);
 }

 bar.call2(foo, 'black', 18);