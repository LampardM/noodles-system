// default config
module.exports = {
  workers: 1,
  cookie: {
    domain: "",
    path: "/",
    // maxAge: '', // note 若是file则此不生效，以file的maxAge为准
    signed: true,
    httpOnly: true,
    keys: ["signature key"] // 当 signed 为 true 时，使用 keygrip 库加密时的密钥
  },
  errnoField: "code", // errno field
  errmsgField: "message" // errmsg field
};
