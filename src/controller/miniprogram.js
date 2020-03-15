/*
 * @Description: 小程序端controller
 * @Author: longzhang6
 * @Date: 2020-03-14 18:39:09
 * @LastEditors: longzhang6
 * @LastEditTime: 2020-03-14 18:41:11
 */
const Base = require("./base.js");

module.exports = class extends Base {
  indexAction() {
    return this.display();
  }
};
