module.exports = class extends think.Controller {
  __before() {
    console.log("前置统一操作在这里执行");
  }
};
