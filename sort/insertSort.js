/**
 * 插入排序
 * 将一个记录插入已排好序的有序表中
 */

function insertSort(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let base = arr[i];
    for (var j = 0; j < i; j++) {
      if (arr[i] < arr[j]) break;
    }

    for (let k = i; k > j; k--) {
      arr[k] = arr[k - 1];
    }
    arr[j] = base;
  }
  return arr;
}

let arr = [20, 30, 40, 10, 25, 50];

console.log(insertSort(arr));

/**
 * 更优秀
 */

function insertionSort(arr) {
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

console.log(insertionSort(arr))