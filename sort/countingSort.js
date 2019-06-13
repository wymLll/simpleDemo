/**
 * 计数排序
 * 特征：输入数据必定在一个范围之内
 * 核心：数据化为index存储在额外的空间中
 */
function countingSort(arr, maxValue){
    var len = arr.length,
        bucket = new Array(maxValue + 1),
        bucketLen = maxValue +1;

    // 对arr遍历，生成bucket数组
    for(var i = 0; i < len; i++){
        var index = arr[i];
        if(!bucket[index]) bucket[index] = 0;
        bucket[index]++;
    }

    i = 0;
    for(var j = 0; j < bucketLen; j++){
        while(bucket[j]>0){
            arr[i++] = j;
            bucket[j]--;
        }
    }
    return arr;
}

var arr = [11, 43, 24, 11, 24, 43, 33, 24];
console.log(countingSort(arr, 43)) //打印结果 [ 11, 24, 43, 43, 65, 76, 89 ]