// function getUrlQuery(name){
//     var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
//     var result = window.location.search.substr(1).match(reg);
//     return result? decodeURIComponent(result[2]):null
// }

// console.log(getUrlQuery('//baidu.com/product/list?keyword=xxx&page=1'))


function Timer(){
    this.s1 = 0;
    this.s2 = 0;
    setInterval(()=> this.s1++,100)
    setInterval(()=> this.s2++,1000)
}

var timer = new Timer();
setTimeout(()=> console.log('s1: ', timer.s1), 3100)
setTimeout(()=> console.log('s2: ', timer.s2), 3100)