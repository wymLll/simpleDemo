{
    let obj = {
        birth: 1990,
        getAge: function () {
            let b = this.birth; // 1990
            console.log(b);
            let fn = function () {
                return new Date().getFullYear() - this.birth; // this指向window或undefined
            };
            return fn();
        }
    };
    console.log(obj.getAge()); // NaN
}
{
    let obj = {
        birth: 1990,
        getAge: function () {
            let b = this.birth; // 1990
            console.log(b);
            let fn = () => new Date().getFullYear() - this.birth; // this指向obj对象
            return fn();
        }
    };
    console.log(obj.getAge()); // 25
    
}

{
    let shape = {
        radius: 10,
        diameter(){
            return this.radius * 2;
        },
        perimeter: () => 2 *Math.PI * this.radius,
        anotherPerimeter: function(){
            let fn = () => 2 *Math.PI * this.radius;
            return fn()
        }
    }

    console.log(shape.diameter()) //20
    console.log(shape.perimeter()) //NaN
    console.log(shape.anotherPerimeter()) //62.83185307179586
}