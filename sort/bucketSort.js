/**
 * 桶排序
 */

 function bucketSort(arr, bucketSize = 5){
    let len = arr.length;
    if(len === 0) return arr;
    
    let min = Math.min.apply(null, arr);
    let max = Math.max.apply(null, arr);

    let bucketCount = Math.floor((max - min)/bucketSize) + 1; //桶的数量
    let buckets = new Array(bucketCount);   //存储所有桶
    for(let i = 0; i < bucketCount; i++) buckets[i] = [];   //初始化每个桶

    for(let i = 0; i < len; i++) {  //分桶
        buckets[Math.floor((max - min)/bucketSize)].push(arr[i]);
    }

    arr.length = 0;
    for(let i = 0; i < buckets.length; i++){
        insertSort(buckets[i]); //对每个桶进行 插入排序
        for (var j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j]);                      
        }
    }
    console.log(arr)
    return arr;
 }

 let arr = [2,5,3,0,2,8,0,3,4,3]
 bucketSort(arr);


 function insertSort(arr) {
    var len = arr.length;
    var preIndex, current;

    for (var i = 1; i < len; i++) {
        preIndex = i-1;
        current = arr[i];

        while(preIndex >= 0 && current < arr[preIndex]){
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }

        arr[preIndex + 1] = current;
    }
    return arr;
}