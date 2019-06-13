function creatFuns(){
    var result = new Array();

    for(var i = 0; i < 10; i++){
     
        result[i] = function(){
        
            return i;
        }
        console.log(result[i]);
    }
    return result;
}

var res = creatFuns();


console.log(res);

function creatFuns2(){
    var result = new Array();

    for(var i = 0; i < 10; i++){
        result[i] = function(num){
         
            return function(){
                return num;
            };
            
        }(i);
    }
    return result;
}

var res2 = creatFuns2();

console.log(res2);

function creatFuns3(){
    var result = new Array();

    for(var i = 0; i < 10; i++){
        result[i] = function(num){
                return num;
        }(i);
    }
    return result;
}

var res3 = creatFuns3();

console.log(res3);