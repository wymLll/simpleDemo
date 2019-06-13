/**
 * JSON.parse(text[, reviver])
 * 解析json为js值或对象
 * 1. eval
 * 2. Function
 * eval 与 Function 都有着动态编译js代码的作用
 */

function jsonParseEval(json){
     //参数必须是字符串，加括号的原因：因为js中{}通常是表示一个语句块，eval只会计算语句块内的值进行返回。加上括号就变成一个整体的表达式。
     return eval('(' + json + ')'); 
}
    
console.log(jsonParseEval(JSON.stringify({x : 5}))); // { x: 5}
console.log(jsonParseEval(JSON.stringify([1, "false", false]))) // [1, "false", false]
console.log(jsonParseEval(JSON.stringify({b: undefined}))) // {}
console.log(jsonParseEval(JSON.stringify(1))) // 1
console.log(jsonParseEval(JSON.stringify(null))) // null

function jsonParse(json){
    json = (new Function('return ' + json))();    
    return json;
}

console.log(jsonParse(JSON.stringify({x : 5}))); // { x: 5}
console.log(jsonParse(JSON.stringify([1, "false", false]))) // [1, "false", false]
console.log(jsonParse(JSON.stringify({b: undefined}))) // {}
console.log(jsonParse(JSON.stringify(1))) // 1
console.log(jsonParse(JSON.stringify(null))) // null