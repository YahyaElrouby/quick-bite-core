type Level = "info" | "error" | "warn" | "debug";
type Metadata = Record<string, unknown>;

class Logger {
  private static instance: Logger;

  constructor() {
    if (Logger.instance) return Logger.instance;
    Logger.instance = this;
  }

  log(level: Level, message: string, metadata: Metadata = {}): void {
    const logObject = {
      level,
      message,
      timestamp: Date.now(),
      ...metadata,
    };
    // This could call datadog logger
    console.log(JSON.stringify(logObject));
  }

  info(message: string, metadata: Metadata = {}): void {
    this.log("info", message, metadata);
  }

  error(message: string, metadata: Metadata = {}): void {
    this.log("error", message, metadata);
  }

  warn(message: string, metadata: Metadata = {}): void {
    this.log("warn", message, metadata);
  }

  debug(message: string, metadata: Metadata = {}): void {
    this.log("debug", message, metadata);
  }
}

export const logger = new Logger();
