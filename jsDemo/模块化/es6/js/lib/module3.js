'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 可暴露任意数据类型，只能暴露一次，
 */
exports.default = {
  name: 'Tom',
  setName: function setName(name) {
    this.name = name;
  }
};