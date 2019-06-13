/**
 * 冒泡排序
 * 原理，两两之间比较大小，第一次排序后，最大/小的在最末尾，下次冒泡不需要管理
 */

function bubbleSort(arr) {
  let len = arr.length;
  //   第一次排序，需要比较len-1此
  let num = len - 1;
  while (num) {
    for (let i = 1; i < num; i++) {
      if (arr[i] < arr[i - 1]) {
        let temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
      }
    }
    // 每完成一次冒泡排序，下一次两两比较次数就少一次
    num--;
  }
  return arr;
}

let arr = [0, 10, 20, 30, 40, 10, 25, 50];

console.log(bubbleSort(arr));
