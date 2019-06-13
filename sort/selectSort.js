/**
 * 选择排序
 * 找到最小/大的那个元素与最后一个位置上的元素交换
 */

function selectSort(arr) {
  let len = arr.length;
  let fin = len - 1;
  while (fin) {
    //   最开始的最小值，与其对应的index
    let min = arr[0];
    let temp = 0;

    for (let i = 1; i <= fin; i++) {
      if (min > arr[i]) {
        //   更新最小值与其index
        min = arr[i];
        temp = i;
      }
    }
    // 最小值与最末尾值进行替换
    arr[temp] = arr[fin];
    arr[fin] = min;
    fin--;
  }
  return arr;
}

let arr = [20, 30, 40, 10, 25, 50];

console.log(selectSort(arr));

function selectionSort(arr) {
  var len = arr.length;
  var minIndex, temp;
  for (var i = 0; i < len - 1; i++) {
    minIndex = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        //寻找最小的数
        minIndex = j; //将最小数的索引保存
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}
