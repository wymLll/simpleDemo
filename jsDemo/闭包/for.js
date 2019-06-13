for(var i = 0; i < 6; i++){
    setTimeout(function timer(){
        console.log(i);
    },100)
}

console.log("..........no2.........");
for(var i = 0; i < 6; i++){
    function timer(){
        console.log(i);
    };
    timer();
}

console.log("..........no3.........");
for (var i = 0; i < 6; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i*1000);
}


