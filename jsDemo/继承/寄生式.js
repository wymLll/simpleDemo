
/**
 * 根原型式对比：
 * 原型式是person的两个副本
 * 寄生式不仅有person的属性方法，还可以定义自己的其余的属性方法
 */

 function createAnother(prto){
     var clone = Object.create(prto);
     clone.sayHi = function(){
         console.log('hi')
     }
     return clone
 }

 var person = {
     name: 'alei'
 }

 var another = createAnother(person);
 another.sayHi()