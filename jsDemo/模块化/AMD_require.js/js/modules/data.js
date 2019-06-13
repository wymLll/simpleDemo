/**
 * 定义没有依赖的暴露模块
 */
define(function() {
    let msg = "hello world";

    function getMsg(){
        return msg.toUpperCase()
    }

    return{getMsg}
});