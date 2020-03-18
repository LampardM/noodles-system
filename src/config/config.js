// default config
module.exports = {
  workers: 1,
  cookie: {
    domain: "",
    path: "/",
    maxAge: 10 * 3600 * 1000, // 10个小时
    signed: true,
    keys: [] // 当 signed 为 true 时，使用 keygrip 库加密时的密钥
  },
  errnoField: "code", // errno field
  errmsgField: "message" // errmsg field
};
