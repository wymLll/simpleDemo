/**
 * 二分法查找：
 * 前提：有序数组
 */

 var arr = [1,3,4,5,7,9,12]
// { //非递归
//     function binary_search(arr, target){
//         const len = arr.length;
//         let low = 0;
//         let high = len-1;

//         while(low<=high){
//             let mid = Math.floor((high+low)/2);
//             const midNum = arr[mid];
//             if(midNum < target){
//                 low = mid+1;
//             }
//             if(midNum > target){
//                 high = mid-1;
//             }
//             if(midNum === target) return mid;
//         }

//         return -1;
//     }

//     console.log(binary_search(arr,0));
// }

{// 递归
    function binary_search(arr,low, high, target){
        if(low > high) return -1;
        let mid = Math.floor((high+low)/2);
        const midNum = arr[mid];
        if(midNum === target) return mid;
        if(midNum < target) return binary_search(arr,mid + 1, high, target);    //必须return否则结果是undefined
        if(midNum > target) return binary_search(arr,low, mid - 1, target);
    }
    let high = arr.length-1;
    console.log(binary_search(arr,0,high,0));
}
