import log4js  from 'log4js'

log4js.configure({
    appenders: {
      miLoggerConsole: { type: "console" },
      miLoggerFile: { type: 'file', filename: 'errores.log' },
    },
    categories: {
      default: { appenders: ["miLoggerConsole"], level: "info" },
      consola: { appenders: ["miLoggerConsole"], level: "info" },
      archivo: { appenders: ["miLoggerFile"], level: "warn" }
    }
})
export const logger = log4js.getLogger();

// logger.trace("Entering cheese testing");
// logger.debug("Got cheese.");
// logger.info("Cheese is Comté.");
// logger.warn("Cheese is quite smelly.");
// logger.error("Cheese is too ripe!");
// logger.fatal("Cheese was breeding ground for listeria.");