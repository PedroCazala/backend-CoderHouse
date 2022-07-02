import log4js from 'log4js'
//configuración

log4js.configure({
    appenders: {
      miLoggerConsole: { type: "console" },
      miLoggerFileWarn: { type: 'file', filename: 'warn.log' },
      miLoggerFileError: { type: 'file', filename: 'error.log' },
    },
    categories: {
        default: { appenders: ["miLoggerConsole"], level: "info" },
        consola: { appenders: ["miLoggerConsole"], level: "info" },
        archivoWarn: { appenders: ["miLoggerFileWarn","miLoggerConsole"], level: "warn" },
        archivoErrores: {appenders:["miLoggerFileError","miLoggerConsole"],level: "error"}
    }
})
export const logger = log4js.getLogger();
// logger.trace("Entering cheese testing");
// logger.debug("Got cheese.");
// logger.info("Cheese is Comté.");
// logger.warn("Cheese is quite smelly.");  
// logger.error("Cheese is too ripe!");
// logger.fatal("Cheese was breeding ground for listeria.");

export const loggerWarn = log4js.getLogger('archivoWarn')
// loggerWarn.info('un info')
// loggerWarn.warn('un warn')
// loggerWarn.error('un error')
// loggerWarn.fatal('un fatal')

export const loggerError = log4js.getLogger('archivoErrores')
// loggerError.info('un info')
// loggerError.warn('un warn')
// loggerError.error('un error')
// loggerError.fatal('un fatal')
