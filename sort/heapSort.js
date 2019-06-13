/**
 * 堆排序
 */
var len;
function heapSort(arr){
    len = arr.length;
    // 建堆
    for(var i = Math.floor(len/2); i>=0; i--){
        adjustHeap(arr, i);
    }
    for(var i = len-1; i>0; i--){
        swap(arr,0,i);
        len--;
        adjustHeap(arr, 0);
    }
    return arr;
}

function adjustHeap(arr, i){
    var left = 2 * i +1,    // 左节点位置
        right = 2 * i + 2,  //右节点位置
        largeset = i;
    
    // 如果左节点存在并且左节点大于当前最大节点，交换位置
    if(left < len && arr[left] > arr[largeset]){
        largeset = left;
    }

    // 如果右节点存在并且右节点大于当前最大节点，交换位置
    if(right < len && arr[right] > arr[largeset]){
        largeset = right;
    }

    // 如果发现修改了位置，则交换值，并且继续向下调整堆
    if(largeset != i){
        swap(arr, i, largeset);
        adjustHeap(arr, largeset);
    }
}

function swap(arr, i, j) {
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

var arr = [11, 43, 24, 76, 89, 43, 65]
heapSort(arr)
console.log(arr) //打印结果 [ 11, 24, 43, 43, 65, 76, 89 ]