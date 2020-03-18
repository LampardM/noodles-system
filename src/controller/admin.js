/*
 * @Description: 后台管理系统controller
 * @Author: longzhang6
 * @Date: 2020-03-14 18:38:27
 * @LastEditors: longzhang6
 * @LastEditTime: 2020-03-18 22:24:50
 */
const Base = require("./base.js");

module.exports = class extends Base {
  indexAction() {
    return this.display();
  }
  // * 登录
  async loginAction() {
    let { username, password } = this.post();
    let userInfo = await think.mongo("admin/user").getAdminUserInfo();
    if (userInfo.name === username && userInfo.password === password) {
      this.session("userid", userInfo.id);
      return this.success({}, "SUCCESS");
    } else {
      return this.fail(1001, "用户名或者密码错误");
    }
  }
  userInfoAction() {}
  // * 登出
  logoutAction() {
    this.session(null);
  }
};
