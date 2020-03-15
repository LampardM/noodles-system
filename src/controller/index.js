const Base = require("./base.js");

module.exports = class extends Base {
  indexAction() {
    // * 后台管理系统的静态资源
    return this.display("index.html");
  }
};
