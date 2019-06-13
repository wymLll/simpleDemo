/**
 * 用法：JSON.stringify(value[, replacer[, space]])
 * 功能：js转Json
 * 1. Boolean Number String null 类型自动转换为原始值
 * 2. undefined 函数 symbol 会被忽略（对象中），或者转为null（数组中）
 * 3. 不可枚举的属性会被忽略
 * 4. 如果一个对象的属性被循环引用，忽略该属性
 */

 function jsonStringify(obj){
    let type = typeof obj;
    let arr = Array.isArray(obj);

    if(type !== 'object'){
        if(/string/.test(type)) obj = '"' + obj + '"';
        if(/function|symbol/.test(type)) obj = undefined;
        return String(obj);
    }else{
        if(obj === null) return null;

        let json = [];
        for(let i in obj){
            let v = obj[i];
            let vType = typeof v;
            if(v === obj) continue; //自循环情况
            if(/symbol|function|undefined/.test(vType)){   
                if(arr) json.push(String(null));
                continue;
             }
            v = jsonStringify(v);
            json.push((arr ? "": '"' + i + '":') + String(v));
        }
        return (arr ? '[': '{') + String(json) + (arr ? ']' : '}')
    }
 }

let fn = function sayAi(){console.log("xxx")};
let symbol = Symbol();
console.log( typeof symbol);    //symbol
console.log(String(symbol)) // symbol()

console.log(JSON.stringify(symbol));    //undefined
console.log(jsonStringify(symbol)) // symbol()

console.log(JSON.stringify(12));    //12
console.log(jsonStringify(12)) // 12

console.log(JSON.stringify(true));  //true
console.log(jsonStringify(true)) // true

console.log(JSON.stringify("hi"));  //"hi"
console.log(jsonStringify("hi")) // "hi"

console.log(JSON.stringify(undefined)); //undefined
console.log(jsonStringify(undefined)) // undefined

console.log(JSON.stringify(null));  //null
console.log(jsonStringify(null)) // null

console.log(JSON.stringify(fn));    //undefined
console.log(jsonStringify(fn)) // //undefined

console.log(JSON.stringify([1, "false", false, fn, undefined, null, symbol])); // [1,"false",false,null,null,null]
console.log(jsonStringify([1, "false", false, fn, undefined, null, symbol])) // [1,"false",false,null,null,null]

console.log(JSON.stringify({x : 5, b: undefined, c: null, fn, symbol}));  // {"x":5,"c":null}
console.log(jsonStringify({x : 5, b: undefined, c: null, fn, symbol})) // {"x":5,"c":null}

