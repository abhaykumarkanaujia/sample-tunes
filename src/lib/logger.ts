enum LogLevel {
  ERROR = "ERROR",
  WARN = "WARN",
  INFO = "INFO",
  DEBUG = "DEBUG",
}

function log(level: LogLevel, message: string) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${level}] ${message}`);
}

export const logger = {
  error: (message: string) => log(LogLevel.ERROR, message),
  warn: (message: string) => log(LogLevel.WARN, message),
  info: (message: string) => log(LogLevel.INFO, message),
  debug: (message: string) => log(LogLevel.DEBUG, message),
};
