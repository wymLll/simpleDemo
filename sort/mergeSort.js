/**
 * 归并排序：先递归分解，后合并
 */

function mergeSort(arr){
    var len = arr.length;
    if(len < 2) return arr;

    var mid = Math.floor(len/2);

    var left = arr.slice(0,mid);
    var right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    var result = []
    while(left.length >0 && right.length >0){
        if(left[0] < right[0]) result.push(left.shift());
        else result.push(right.shift());
    }

    while(left.length > 0 )  result.push(left.shift());
    while(right.length > 0 )  result.push(right.shift());
   
    return result;
}

let arr = [20, 30, 40, 10, 25, 50];

console.log(mergeSort(arr));