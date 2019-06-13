(function(){
    requirejs.config({
        // 基本路径,出发点在更目录下
        // baseUrl: 'js/',

        // 配置模块表示名与模块路径的映射
        paths: {
            "alert": './modules/alert',
            "data": './modules/data',
            'jquery': './lib/jquery-3.4.0.min'
        }
    })
    // 引入，放在主模块
    requirejs(['alert'],function(alert){
        alert.showMsg()
    })
})()