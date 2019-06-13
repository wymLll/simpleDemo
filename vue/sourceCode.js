  import Vue from '../vue'
  /**
   * 将_from的所有属性，复制给to返回
   * Mix properties into target object.
   */
  function extend (to, _from) {
    for (var key in _from) {
      to[key] = _from[key];
    }
    return to
  }

  /**
   * 将对象数组转换位一个对象
   * Merge an Array of Objects into a single Object.
   */
  function toObject (arr) {
    var res = {};
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }
    return res
  }

  var arr = [1,2,3,{"a":12},{"b":13,"c":14}]
  console.log(toObject(arr))    //Object {a: 12, b: 13, c: 14}


  