// 1. findMin() : 返回最小的元素
// 使用频率：非常高
// 2. findMax() : 返回最大的元素
// 使用频率：非常高
// 3. deleteMin() : 删除最小的元素
// 使用频率：较高
// 4. deleteMax() : 删除最大的元素
// 使用频率：较高
// 5. insert() : 插入一个元素
// 使用频率：低        
// 6. delete() : 删除一个元素
// 使用频率：低


var arr = [];
//使用数组作为数据结构，每次插入确保数组由小到大排序，插入元素的时候从后往前若是小于前一元素就一直换位，直到顺序正确
// 因为使用频率少，O(n)复杂度也可接受
//顺序排列的数组优势就在于O(1)复杂度得到最小/大的元素
function insert(arr, i){
    arr.push(i);
    var len = arr.length;
    var preIndex = len-2;
        current = i;
        while(preIndex >= 0 && current < arr[preIndex]){
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }

        arr[preIndex + 1] = current;
    
    return arr;
}


function deletei(i){
    let index = arr.indexOf(i);
    if(index){
        arr.splice(index,1)
    }
    return arr;
}

function findMin(arr){
    return arr[0];
}
function findMax(arr){
    return arr[arr.length-1];
}

function deleteMin(arr){
    arr.splice(arr.length-1,1)
}
function deleteMax(arr){
    arr.splice(0,1)
}