{
  const fs = require('fs');
  setTimeout(() => {
    console.log('timeout 1');//5
  }, 1);

  process.nextTick(() => {
    console.log('nextTick 1');//2
  });

  fs.readFile('./index.js', (err, data) => {
    if (err) return;
    console.log('I/O callback');//9
    process.nextTick(() => {
      console.log('nextTick 2');//10
    });
  });

  setImmediate(() => {
    console.log('immediate 1');//6
    process.nextTick(() => {
      console.log('nextTick 3');//7
    });
  });

  setTimeout(() => {
    console.log('timeout 2');//13
    process.nextTick(() => {
      console.log('nextTick 4');//14
    });
  }, 100);

  new Promise((resolve, reject) => {
    console.log('promise run');//1
    process.nextTick(() => {
      console.log('nextTick 5');//3
    });
    resolve('promise then');
    setImmediate(() => {
      console.log('immediate 2');//8
    });
  }).then(res => {
    console.log(res);//4
  });
}

// {
//   console.log('start');

//   setTimeout(() => {
//     // callback1
//     console.log(111);
//     setTimeout(() => {
//       // callback2
//       console.log(222);
//     }, 0);
//     setImmediate(() => {
//       // callback3
//       console.log(333);
//     });
//     process.nextTick(() => {
//       // callback4
//       console.log(444);
//     });
//   }, 0);

//   setImmediate(() => {
//     // callback5
//     console.log(555);
//     process.nextTick(() => {
//       // callback6
//       console.log(666);
//     });
//   });

//   setTimeout(() => {
//     // callback7
//     console.log(777);
//     process.nextTick(() => {
//       // callback8
//       console.log(888);
//     });
//   }, 0);

//   process.nextTick(() => {
//     // callback9
//     console.log(999);
//   });

//   console.log('end');
// }
