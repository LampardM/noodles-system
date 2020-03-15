const fileCache = require("think-cache-file");
const nunjucks = require("think-view-nunjucks");
const fileSession = require("think-session-file");
const { Console, File, DateFile } = require("think-logger3");
const path = require("path");
const isDev = think.env === "development";

/**
 * cache adapter config
 * @type {Object}
 */
exports.cache = {
  type: "file",
  common: {
    timeout: 24 * 60 * 60 * 1000 // millisecond
  },
  file: {
    handle: fileCache,
    cachePath: path.join(think.ROOT_PATH, "runtime/cache"), // absoulte path is necessarily required
    pathDepth: 1,
    gcInterval: 24 * 60 * 60 * 1000 // gc interval
  }
};

/**
 * model adapter config
 * @type {Object}
 */
exports.model = {
  type: "mongo",
  common: {
    logConnect: isDev,
    logSql: isDev,
    logger: msg => think.logger.info(msg)
  },
  mongo: {
    host: "127.0.0.1",
    port: 27017,
    user: "admin",
    password: "woshidiyi789",
    database: "noodles", // 数据库名称
    options: {
      // 身份验证相关
      // replicaSet: 'mgset-3074013',
      // authSource: 'admin'
    }
  }
};

/**
 * session adapter config
 * @type {Object}
 */
exports.session = {
  type: "file",
  common: {
    cookie: {
      name: "noodles",
      keys: ["signature key"],
      //maxAge: '',
      //expires: '',
      path: "/", //a string indicating the path of the cookie
      //domain: '',
      //secure: false,
      httpOnly: true,
      sameSite: false,
      signed: true,
      overwrite: false
    }
  },
  file: {
    handle: fileSession,
    sessionPath: path.join(think.ROOT_PATH, "runtime/session"),
    maxAge: "1d", //session timeout, default is 1 day
    autoUpdate: true //update expires time when get session, default is false
  }
};

/**
 * view adapter config
 * @type {Object}
 */
exports.view = {
  type: "nunjucks",
  common: {
    viewPath: path.join(think.ROOT_PATH, "www"),
    sep: "/",
    extname: ".html"
  },
  nunjucks: {
    handle: nunjucks
  }
};

/**
 * logger adapter config
 * @type {Object}
 */
exports.logger = {
  // type: isDev ? "dateFile" : "dateFile",
  type: "dateFile", // note 生产测试都生成日志文件
  console: {
    handle: Console
  },
  file: {
    handle: File,
    backups: 10, // max chunk number
    absolute: true,
    maxLogSize: 50 * 1024, // 50M
    filename: path.join(think.ROOT_PATH, "logs/app.log")
  },
  dateFile: {
    handle: DateFile,
    level: "ALL",
    absolute: true,
    pattern: "-yyyy-MM-dd",
    alwaysIncludePattern: true,
    filename: path.join(think.ROOT_PATH, "logs/app.log")
  }
};
