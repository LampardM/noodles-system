/*
 * @Description: 后台管理系统controller
 * @Author: longzhang6
 * @Date: 2020-03-14 18:38:27
 * @LastEditors: longzhang6
 * @LastEditTime: 2020-03-19 23:05:28
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
  async userInfoAction() {
    let sessionInfo = await this.session("userid"); // note 即便是获取session时也会给客户端设置cookie
    let sessionInfo2 = await this.cookie("noodles");
    console.log("sessionInfo", sessionInfo);
    console.log("sessionInfo2", sessionInfo2);
    return this.success();
  }
  // * 登出
  logoutAction() {
    this.session(null);
  }
};
