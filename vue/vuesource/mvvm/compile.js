function Compile(el, vm) {
  // 保存vm到compile对象
  this.$vm = vm;
  // 将el对应的元素对象保存到compile对象中： 判断el是不是元素节点，如果不是则获取对应的dom元素
  this.$el = this.isElementNode(el) ? el : document.querySelector(el);

  // 模板解析最重要的三部分
  if (this.$el) {
    // 页面中el的所有子节点转到frament中
    this.$fragment = this.node2Fragment(this.$el);
    // 实现初始化显示
    // 编译fragment中所有层次子节点
    this.init();
    // 将解析后的frament放回页面的el元素中
    this.$el.appendChild(this.$fragment);
  }
}

Compile.prototype = {
  node2Fragment: function(el) {
    // 创建空的fragment对象
    var fragment = document.createDocumentFragment(),
      child;

    // 将el中所有子节点转移到fragment
    while ((child = el.firstChild)) {
      fragment.appendChild(child);
    }

    return fragment;
  },

  init: function() {
    // 编译fragment内的所有层次子节点：
    this.compileElement(this.$fragment);
  },

  compileElement: function(el) {
    // 1. 取出所有最外层子节点
    var childNodes = el.childNodes,
      // compiled实例
      me = this;
    // 遍历所有子节点
    [].slice.call(childNodes).forEach(function(node) {
      // 得到节点的文本内容
      var text = node.textContent;
      // 创建正则对象：匹配大括号
      var reg = /\{\{(.*)\}\}/; //{{xx}}

      // 判断节点是否是元素节点
      if (me.isElementNode(node)) {
        // 用来编译元素节点内的所有指令属性
        me.compile(node);
        // 判断节点是否是大括号合适的文本节点
      } else if (me.isTextNode(node) && reg.test(text)) {
        // 编译大括号表达式文本节点
        me.compileText(node, RegExp.$1.trim());
      }
      // 2. 递归解析内层子节点
      if (node.childNodes && node.childNodes.length) {
        me.compileElement(node);
      }
    });
  },

  compile: function(node) {
    var nodeAttrs = node.attributes,
      me = this;

    [].slice.call(nodeAttrs).forEach(function(attr) {
      var attrName = attr.name;
      if (me.isDirective(attrName)) {
        var exp = attr.value;
        var dir = attrName.substring(2);
        // 事件指令
        if (me.isEventDirective(dir)) {
          compileUtil.eventHandler(node, me.$vm, exp, dir);
          // 普通指令
        } else {
          compileUtil[dir] && compileUtil[dir](node, me.$vm, exp);
        }

        node.removeAttribute(attrName);
      }
    });
  },

  compileText: function(node, exp) {
    compileUtil.text(node, this.$vm, exp);
  },

  isDirective: function(attr) {
    return attr.indexOf('v-') == 0;
  },

  isEventDirective: function(dir) {
    return dir.indexOf('on') === 0;
  },

  isElementNode: function(node) {
    return node.nodeType == 1;
  },

  isTextNode: function(node) {
    return node.nodeType == 3;
  }
};

// 包含多个解析指令方法的指令处理对象
var compileUtil = {
  // 解析v-text，v-text大括号是一致的
  text: function(node, vm, exp) {
    this.bind(node, vm, exp, 'text');
  },
  // 解析v-html
  html: function(node, vm, exp) {
    this.bind(node, vm, exp, 'html');
  },
  // 解析v-model
  model: function(node, vm, exp) {
    this.bind(node, vm, exp, 'model');

    var me = this,
      val = this._getVMVal(vm, exp);
    node.addEventListener('input', function(e) {
      var newValue = e.target.value;
      if (val === newValue) {
        return;
      }

      me._setVMVal(vm, exp, newValue);
      val = newValue;
    });
  },

  class: function(node, vm, exp) {
    this.bind(node, vm, exp, 'class');
  },
  // 解析v-bind
  bind: function(node, vm, exp, dir) {
    // 变量去属性名：./[]。 属性名是变量，必须使用[]  --》得到更新函数
    // dir：指令名称：v-text即text
    var updaterFn = updater[dir + 'Updater'];

    // _getVMVal得到{{}}的值
    updaterFn && updaterFn(node, this._getVMVal(vm, exp));

    new Watcher(vm, exp, function(value, oldValue) {
      updaterFn && updaterFn(node, value, oldValue);
    });
  },

  // 事件处理
  eventHandler: function(node, vm, exp, dir) {
    var eventType = dir.split(':')[1],
      fn = vm.$options.methods && vm.$options.methods[exp];

    if (eventType && fn) {
      node.addEventListener(eventType, fn.bind(vm), false);
    }
  },

  // 通过表达式达到对应的值
  _getVMVal: function(vm, exp) {
    var val = vm;
    exp = exp.split('.');
    exp.forEach(function(k) {
      val = val[k];
    });
    return val;
  },

  _setVMVal: function(vm, exp, value) {
    var val = vm;
    exp = exp.split('.');
    exp.forEach(function(k, i) {
      // 非最后一个key，更新val的值
      if (i < exp.length - 1) {
        val = val[k];
      } else {
        val[k] = value;
      }
    });
  }
};

// 更新器，更新节点。指令是用来操作标签节点的
var updater = {
  // 更新节点的文本属性
  textUpdater: function(node, value) {
    node.textContent = typeof value == 'undefined' ? '' : value;
  },
  // 更新节点的innerHtml属性
  htmlUpdater: function(node, value) {
    node.innerHTML = typeof value == 'undefined' ? '' : value;
  },
  // 更新节点的className
  classUpdater: function(node, value, oldValue) {
    var className = node.className;
    className = className.replace(oldValue, '').replace(/\s$/, '');

    var space = className && String(value) ? ' ' : '';

    node.className = className + space + value;
  },
  // 更新节点的value属性
  modelUpdater: function(node, value, oldValue) {
    node.value = typeof value == 'undefined' ? '' : value;
  }
};
