{
/**
 * 驼峰式->连字符式
 */

 let camel = "fooStyleCss";
 let hyphen = camel.replace(/([A-Z])/g, '-$1').toLocaleLowerCase();
 console.log(hyphen);   //foo-style-css
}


{
/**
 * 连字符式->驼峰式
 */

 let hyphen = "foo-style-css";
 let camel = hyphen.replace(/-(\w)/g, function (all, letter){
    return letter.toUpperCase();
  });
 console.log(camel);  //fooStyleCss
}