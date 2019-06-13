/**
 * 原生ajax
 */

function ajax(url, callback) {
  var xhr = null;
  // 实例化XMLHttpRequest对象
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    // IE6及其以下版本
    xhr = new ActiveXObjcet('Microsoft.XMLHTTP');
  }

  // 监听事件，只要 readyState 的值变化，就会调用 readystatechange 事件
  xhr.onreadystatechange = function() {
    // readyState:
    // 0：未初始化；
    // 1：启动，已经调用open()方法；
    // 2：发送，已经调用send()方法，但是尚未收到相应;
    // 3：接收，已经接收到部分响应数据；
    // 4：完成，收到全部数据

    if (xhr.readyState === 4) {
      var status = xhr.status;
      if ((status >= 200 && status <= 300) || status == 304) {
        // 得到响应信息
        var response = '';
        var type = xhr.getResponseHeader('Content-type');
        if (type.indexOf('xml') !== -1 && xhr.responseXML) {
          response = xhr.responseXML;
        } else if (type === 'application/json') {
          response = JSON.parse(xhr.responseText);
        } else {
          response = xhr.responseText;
        }

        callback(response);
      } else {
        console.log('请求失败：' + status);
      }
    }
  };

  xhr.open('get', url, true);
  xhr.send();
}

/**
 * promise版
 */
