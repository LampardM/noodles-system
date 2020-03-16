const Base = require("./base.js");

module.exports = class extends Base {
  indexAction() {
    // note 路由默认: '/' 渲染静态资源
    return this.display("index.html");
  }
};
