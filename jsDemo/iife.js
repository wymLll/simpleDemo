{
  let a = 0;

  (function iife() {
    a++;
    console.log(a); //1
  })();

  console.log(a);   //1
}

{
  let a = 0;

  (function iife() {
    let a = 1;
    a++;
    console.log(a); //2
  })();

  console.log(a);   //0
}
