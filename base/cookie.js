/**
 * 原生js
 */
{
  /**
   * 写cookie
   * expireDays: 几天后过期
   */
  function setCookie(cname, cvalue, expireDays) {
    var date = new Date();
    date.setDate(date.getDate() + expireDays);
    var expires = 'expires=' + date.toUTCString(); //根据世界时 (UTC) 把 Date 对象转换为字符串
    document.cookie = cname + '=' + escape(cvalue) + ';' + expires; //需要对cookie值编码
  }
  /**
   * 读cookie
   */
  function getCookie(cname) {
    if (document.cookie.length > 0) {
      var start = document.cookie.indexOf(cname + '='); //返回某指定值在字符串中首次出现的位置
      if (start != -1) {
        start = start + cname.length + 1;
        var end = document.cookie.indexOf(';', start); //返回';'的位置。

        if (end == -1) {
          end = document.cookie.length;
        }

        return unescape(document.cookie.split(start, end));
      }
    }
    return '';
  }

  /**
   * 检测cookie
   */

  function checkCookie(cname) {
    var user = getCookie(cname);
    if (user != '') {
      alert('欢迎 ' + user + ' 再次访问');
    } else {
      user = prompt('请输入你的名字:', '');
      if (user != '' && user != null) {
        setCookie('username', user, 30);
      }
    }
  }

  /**
   * 删除cookie
   */

  function delCookie(cname) {
    if (getCookie(cname)) {
      document.cookie = cname + '=' + '; expires=Thu, 01-Jan-70 00:00:01 GMT';
    }
  }
}

{
  //jquery+jquery.cookie
  $.cookie('cname', 'cvalue', { expires: 7, path: '/' });

  //读取cookie
  $.cookie('name');

  //删除cookie
  $.cookie('name', null);
}
