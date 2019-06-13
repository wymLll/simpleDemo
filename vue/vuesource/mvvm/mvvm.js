/**
 * 相当于vue构造函数
 */
function MVVM(options) {
  // 将配置对象保存到vm
  this.$options = options || {};
  // 件data保存到vm和变量data中
  var data = (this._data = this.$options.data);
  // 将vm保存到me
  var me = this;

  // 数据代理 通过defineProperty实现
  // 实现 vm.xxx -> vm._data.xxx
  // 遍历data中的所有属性
  Object.keys(data).forEach(function(key) {
    //data的属性名
    // 对指定属性实现代理
    me._proxy(key);
  });

  this._initComputed();

  observe(data, this);
  // 创建编译对象，来编译解析模板
  this.$compile = new Compile(options.el || document.body, this);
}

MVVM.prototype = {
  $watch: function(key, cb, options) {
    new Watcher(this, key, cb);
  },

  // 实现指定属性的代理方法
  _proxy: function(key) {
    var me = this;
    // 给vm添加指定属性名的属性
    Object.defineProperty(me, key, {
      configurable: false,
      enumerable: true,
      // 当通过vm.xxx读取时，从data中取出对应数据返回    代理读操作
      get: function proxyGetter() {
        return me._data[key];
      },
      // 当通过vm.xxx设置属性值时，被保存到data中对应数据上   代理写操作
      set: function proxySetter(newVal) {
        me._data[key] = newVal;
      }
    });
  },

  _initComputed: function() {
    var me = this;
    var computed = this.$options.computed;
    if (typeof computed === 'object') {
      Object.keys(computed).forEach(function(key) {
        Object.defineProperty(me, key, {
          get:
            typeof computed[key] === 'function'
              ? computed[key]
              : computed[key].get,
          set: function() {}
        });
      });
    }
  }
};
