/*
 * @Description: 后台管理系统controller
 * @Author: longzhang6
 * @Date: 2020-03-14 18:38:27
 * @LastEditors: longzhang6
 * @LastEditTime: 2020-03-16 22:34:00
 */
const Base = require("./base.js");

module.exports = class extends Base {
  indexAction() {
    return this.display();
  }
  // * 登录
  async loginAction() {
    let info = await think.mongo("admin/user").getAdminUserInfo();
    console.log("admin userInfo", info);
    this.session("userid", info.id);
  }
  // * 登出
  logoutAction() {
    this.session(null);
  }
};
