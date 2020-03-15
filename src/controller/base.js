module.exports = class extends think.Controller {
  __before() {
    console.log("__before");
    // TODO seesion认证（除去admin登录页）
  }
};
