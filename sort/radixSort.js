/**
 * LSD 基数排序
 */

let counter = new Array(10);
function radixSort(arr, d) {
  let mod = 10;
  let dev = 1;
  let len = arr.length;
  for (let i = 0; i < d; i++, mod *= 10, dev *= 10) {
    // 按桶分配
    for (let j = 0; j < len; j++) {
      const ele = arr[j];
      let bucket = parseInt((ele % mod) / dev);
      if (counter[bucket] == null) counter[bucket] = [];
      counter[bucket].push(ele);
    }

    // 整合
    arr = [];
    for (let k = 0; k < 10; k++) {
      if (counter[k]) {
        let val;
        while ((val = counter[k].shift()) != null) {
          arr.push(val);
        }
      }
    }
  }
  return arr;
}

var arr = [99, 15, 48, 75, 46, 37, 90, 100];

console.log(radixSort(arr, 3)); //[ 15, 37, 46, 48, 75, 90, 99, 100 ]

