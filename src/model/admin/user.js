/*
 * @Description: admin用户
 * @Author: longzhang6
 * @Date: 2020-03-14 23:19:22
 * @LastEditors: longzhang6
 * @LastEditTime: 2020-03-15 17:31:13
 */
module.exports = class extends think.Mongo {
  // * 查询admin用户信息
  getAdminUserInfo() {
    return this.mongo("user")
      .where({ type: "admin" })
      .find();
  }
};
