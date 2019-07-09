{
    let arr = [];
    Object.prototype.toString = function (){
      console.log("hello world");
    }
   
    console.log(Array.isArray(arr)) //true
    arr.constructor = {}
    console.log(Array.isArray(arr)) //true
    console.log(arr.constructor); ///{}
    console.log(Object.prototype.toString.call(arr));  //hello world undefined
    console.log(Object.prototype.toString())  //hello world undefined
  }