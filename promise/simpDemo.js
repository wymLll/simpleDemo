// {
//   // 构造promise实例
//   // Promise参数是一个对象，该对象有两个有js引擎提供的resolve和reject函数作为参数
//   const promise = new Promise(function(resolve, reject) {
//     //异步操作
//     if (success) {
//       resolve(value);
//     } else {
//       reject(error);
//     }
//   });

//   // 实例生成后，可以用then指定resolved和rejected状态的回调函数

//   promise.then(
//     function(value) {
//       //resolved状态的回调函数
//     },
//     function(error) {
//       //rejected状态的回调函数
//     }
//   );
// }

{
  const promise = new Promise(function(resolve, reject) {
    //eg1
    // setTimeout(function(){
    //     console.log("我是promise代表的异步操作")
    // },100,"我是promise代表的操作的返回值")

    // 返回值：我是promise代表的异步操作

    // eg2
    // setTimeout(resolve, 100, '我是promise代表的操作的返回值');
    // 返回值： 我是promise代表的操作的返回值

    // eg3
    // setTimeout(reject, 100, '我是promise代表的操作的返回值');
    // 返回值： 我是rejec状态返回的结果:  我是promise代表的操作的返回值


    // eg4
    // setTimeout(function() {
    //   return 10;
    // }, 100);

    // resolve(); //undefined


    // // eg5
    // setTimeout(function() {
    //     const num = 10;
    //     resolve(num); //undefined
    //   }, 100);

    // eg6


    reject(".......");    resolve("...");
  
  });

  promise.then(
    function(value) {
      console.log(value);
    },
    function(error) {
      console.log('我是rejec状态返回的结果: ', error);
    }
  );
}

// {
//   function timeout(ms) {
//     return new Promise((resolve, reject) => {
//       setTimeout(resolve, ms, 'done');
//     });
//   }

//   timeout(100).then(value => {
//     console.log(value);
//   });
// }

// {
//   let promise = new Promise(function(resolve, reject) {
//     console.log('Promise');
//     resolve();   //调用才会触发then
//   });

//   promise.then(function() {
//     console.log('resolved.');
//   });

//   console.log('Hi!');

//   // Promise
//   // Hi!
//   // resolved
// }

// {
//   let promise = new Promise(function(resolve, reject) {
//     console.log('Promise');
//   });

//   promise.then(function() {
//     console.log('resolved.');
//   });

//   console.log('Hi!');

//   // Promise
//   // Hi!
// }

// {
//   let promise = new Promise(function(resolve, reject) {
//     console.log('Promise');
//     reject();
//   });

//   promise.then(function() {
//     console.log('resolved.');
//   },function(error){
//       console.log(error);   //undefined
//   });

//   console.log('Hi!');

//   // Promise
//   // Hi!
// }
