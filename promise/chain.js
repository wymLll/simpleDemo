{
    // 实例1
    function delay(time){
        return new Promise(function(resolve,reject){
            setTimeout(resolve,time)
        })
    }
    delay(100)
    .then(function step2(){
        console.log('step2 after 100ms')
        return delay(200)
    }).then(function step3(){
        console.log('step3 after 200ms')
    }).then(function step4(){
        console.log('step4 (next job)')
        return delay(50)
    }).then(function step5(){
        console.log('step5 after 50ms')
    })
}


{
    // 实例2
    let p = new Promise(function(resolve,reject){
        reject("oops");
    })
    
    let p2 = p.
    then(function fulfilled(){}).   //此处链式throw err，知道遇到定义的rejected函数
    then(function fulfilled2(){},
    function rejected(v){
        console.log(v);  //oops
    })
}

{
    // 实例3
    let p = new Promise(function(resolve,reject){
        // 只会执行一个
        resolve("wao");
        reject("oops")
    })
    
    let p2 = p
    .then(null,function rejected(v){
        console.log(v);  
    })
    .then(function fulfilled2(v){
        console.log(v)  //wao
    },
    )
}

{
    // 实例4
    let p = Promise.resolve(42)
    
    p
    .then(function fulfilled2(v){
        console.log("ful: ",v.toLowerCase())  
    },function rejected(v){
        console.log("rej: ",v);  
    })
    .then(function fulfilled2(v){
        console.log("ful2: ",v)  
    },function rejected(v){
        console.log("rej2: ",v);  //rej2:  TypeError: v.toLowerCase is not a function

    })
    
}
{
    // 实例5
    let p = Promise.resolve(42)
    
    p
    .then(function fulfilled2(v){
        console.log("ful: ",v.toLowerCase())  
    },function rejected(v){
        console.log("rej: ",v);  
    })
    .catch(handleErrors)
    
    function handleErrors(v){
        console.log(v)  //TypeError: v.toLowerCase is not a function
    }

    // 上述情况可能会在catch内部出错
}
{
    // 实例6
    let p = Promise.resolve(42)
    
    p
    .then(function fulfilled2(v){
        console.log("ful: ",v.toLowerCase())  
    },function rejected(v){
        console.log("rej: ",v);  
    })
    // .done(null,handleErrors) 不是es6标准的一部分
    
    function handleErrors(v){
        console.log(v)  //TypeError: v.toLowerCase is not a function
    }

    // 上述情况可能会在catch内部出错
}
