/**
 * 定义有依赖的暴露模块
 * 有几个依赖就需要几个形参，两者一一绑定
 */
define([
    'data',
    'jquery'
], function(data, $) {
    let name = 'wym'

    function showMsg(){
        $('body').css('background','yellowgreen')
        alert(data.showMsg() + ', ' + name)
    }
    return {showMsg}
});
