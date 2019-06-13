
// 宏任务与微任务
// promise,最后console是同步任务，setTimeout是宏任务，then是微任务，then优先级比aysn的awit高
setTimeout(function() {
    console.log("1");
  });
  
  new Promise(function(resolve) {
    console.log("2");
    resolve();
  }).then(function() {
    console.log("3");
  });
  
  console.log("4");
  
  