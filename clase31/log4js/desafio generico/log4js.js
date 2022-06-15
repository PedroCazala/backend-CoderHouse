import log4js  from 'log4js'

log4js.configure({
    appenders: {
      miLoggerConsole: { type: "console" },
      miLoggerFile: { type: 'file', filename: 'errores.log' },
    },
    categories: {
      default: { appenders: ["miLoggerConsole"], level: "info" },
      consola: { appenders: ["miLoggerConsole"], level: "info" },
      archivo: { appenders: ["miLoggerFile"], level: "error" }
    }
})
export const logger = log4js.getLogger();