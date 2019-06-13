/**
 * 快速排序
 * 通常以第一个元素作为关键元素
 * 递归遍历
 * 每一次排序完，key左边的值都小于key，右边的都大于key
 */

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) {
    return;
  }

  var i = left, j = right;
  var key = arr[left];
  var flag = 1;
  while (i < j) {
    if (flag) {
      if (arr[j] > key) j--;
      else {
        arr[i] = arr[j];
        arr[j] = key;
        flag = 0;
      }
    } else {
      if (arr[i] < key) i++;
      else {
        arr[j] = arr[i];
        arr[i] = key;
        flag = 1;
      }
    }
  }

  quickSort(arr, left, i - 1);
  quickSort(arr, j + 1, right);

  return arr;
}

let arr = [20, 30, 40, 10, 25, 50];

console.log(quickSort(arr));
