/**
 * 当我们没有重新定义toString与valueOf时，
 * 函数的隐式转换会调用默认的toString方法，
 * 它会将函数的定义内容作为字符串返回。
 * 而当我们主动定义了toString/vauleOf方法时，
 * 那么隐式转换的返回结果则由我们自己控制了。
 * 其中valueOf的优先级会toString高一点。
 */
function fn() {
    return 20;
  }
  
  console.log(fn + 10);
  // function fn() {
  //   return 20;
  // }10
  
  
  fn.toString = function() {
    return 10;
  };
  
  console.log(fn + 10); // 20
  
  fn.valueOf = function() {
    return 5;
  };
  
  console.log(fn + 10); // 15
  console.log(fn + '1'); //51