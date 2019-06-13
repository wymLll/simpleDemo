{
    var obj1 = {
        name: 'obj1'
    }
    var obj2 = {
        name: 'obj2'
    }
    var obj3 = {
        name: 'obj3'
    }
    function say() {
        console.log(this.name)
    }
    var fn = say.bind(obj1).bind(obj2).bind(obj3)   //obj1
    fn()   
    
    fun = say.bind(obj2);   //obj1
    fn()

    var dn = say.bind(obj2) //obj2
    dn()
}

{
    function foo(){
        console.log(this.a)
    }
    
    var obj = {
        a: 2
    }

    var obj1 = {
        a: 3
    }
    var bar = function(obj){
        foo.call(obj);
    }

    bar();  //undefined
    bar.call(obj1); //undefined

    var bar2 = function(){
        foo.call(obj);
    }

    bar2(); //2
    bar2.call(obj1);    //2cx
}