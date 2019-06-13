/**
 * 希尔排序
 * 直接插入排序算法的一种更高效的改进版本
 * 希尔排序是把记录按下标的一定增量分组，对每组使用直接插入排序算法排序；
 * 随着增量逐渐减少，每组包含的关键词越来越多，当增量减至1时，整个文件恰被分成一组，算法便终止
 */

let arr = [20, 30, 40, 10, 25, 50, 5];

function shellSort(arr){
    var len = arr.length;

    var gap = Math.floor(len/2);
    console.log(gap);

    while(gap > 0){
        for(var i = gap; i < len; i++){
            var cur = arr[i];
            var preIndex = i-gap;

            while(preIndex >= 0 && cur < arr[preIndex]){
                arr[preIndex+gap] = arr[preIndex];
                preIndex -= gap;
            }

            arr[preIndex+gap] = cur;
            console.log(arr);
        }
        gap = Math.floor(gap/2);
    }

    return arr;
}


console.log(shellSort(arr));
