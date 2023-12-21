import SafLogger, { LogLevel } from "saf-logger";
import packageJson from "../../package.json";

const logger = new SafLogger({ name: packageJson.name, level: LogLevel.DEBUG });

export default logger;
