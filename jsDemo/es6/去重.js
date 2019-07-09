{
  //数组先去重

  let arr = [5, 2, 0, 1, 3, 1, 4];
  let arr1 = Array.from(new Set(arr)); //[ 5, 2, 0, 1, 3, 4 ]
  console.log(arr1);
  let arr2 = [...new Set(arr)]
  console.log(arr2); //[ 5, 2, 0, 1, 3, 4 ]
}

{
  //数组降维
  let arr = [1, 2, [3, 4, [4, 5]],,6];
  let arr1 = arr.flat(Infinity);
  console.log(arr1); //[ 1, 2, 3, 4, 4, 5, 6 ]
}

//数组降维 去重 排序
let arr = [3, 4, 4, [5, 6, [2, 3]], , 12];
console.log(Array.from(new Set(arr.flat(Infinity))).sort((v1,v2)=>v1-v2)) //[ 2, 3, 4, 5, 6, 12 ]