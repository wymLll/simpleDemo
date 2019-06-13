/**
 * ES6规定，默认的iterator接口部署在数据结构的Symbol.iterator属性
 */
{
  let m = new Map();

  let x = { id: '1' };
  let y = { id: '2' };
  let z = { id: '3' };

  m.set(x, 'alei');
  m.set(y, 'yeye');
  m.set(z, 'xuxu');

  // map本身就是一个迭代器
  let it = m[Symbol.iterator]();
  console.log(it.next());
  console.log(it.next());
  // { value: [ { id: '1' }, 'alei' ], done: false }
  // { value: [ { id: '2' }, 'yeye' ], done: false }

  // 生成迭代器的api
  console.log(m.keys()); //[Map Iterator] { { id: '1' }, { id: '2' } }
  console.log(m.values()); //[Map Iterator] { 'alei', 'yeye' }
  console.log(m.entries()); //[Map Iterator] { [ { id: '1' }, 'alei' ], [ { id: '2' }, 'yeye' ] }
}

{
  let arr = [1, 2];
  console.log(arr[Symbol.iterator]); //[Function: values]
  let it = arr[Symbol.iterator]();

  // Object [Array Iterator] {}
  // { value: 1, done: false }
  // { value: 2, done: false }
  // { value: undefined, done: true }
  // { value: undefined, done: true }
  console.log(it);
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());
}

{
    function *foo(){
        yield 1
        yield 2
        yield 3
        return 4
    }

    function *bar(){
        yield 5
       let x = yield *foo()
       console.log("x:", x)
    }

    for(let a of bar()){
        console.log(a)
    }
    //5 1 2 3 x：4

    for(let a of foo()){
        console.log(a) // 1 2 3
    }

    let it = foo();
    console.log(it.next())//{ value: 1, done: false }
}