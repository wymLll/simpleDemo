/**
 * 操作符instanceof:
 *     通过探测obj.__proto__.__proto__... === Constructor.prototype来验证obj是否是Constructor的实例。
 */

 function instanceOf(instance, type){
    let proto = instance.__proto__;
    let prototype = type.prototype;

    while(true){
        // Object.prototype.__proto__ === null，说明原型链到Object.prototype终止。
        if (proto === null) return false;
        if(proto === prototype) return true;
        proto = proto.__proto__;
    }
 }

 var arr= [];

 console.log(instanceOf(arr, Object));  //true