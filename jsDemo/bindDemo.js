{ //bind使用小demo
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
    //函数绑定obj之后，就不会绑定到别的对象了
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
        console.log(obj);
        foo.call(obj);
    }
    
    //有形参且未传递
    bar();  //undefined
    bar.call(obj); //undefined


    var bar2 = function(){
        foo.call(obj);
    }
    // 此时obj是会在全局作用域中找obj
    bar2(); //2
    bar2.call(obj1);    //2
}