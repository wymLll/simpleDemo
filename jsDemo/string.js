//String()
{
    let fn = function sayMor() {
      this.info = 'morning';
    };
    console.log(typeof []); //object
    console.log(String(1)); //1
    console.log(String('1')); //1
    console.log(String(true)); //true
    console.log(String(undefined)); //undefined
    console.log(String(null)); //null
    console.log(String('"' + undefined + '"')); //"undefined"
    console.log(String(fn)); //function sayMor(){this.info = "morning"}
    console.log(typeof fn); //function sayMor(){this.info = "morning"}
    console.log(String('"' + fn + '"')); //"function sayMor(){this.info = "morning"}"
  }