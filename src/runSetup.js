const { isNext, isTypeScript, getPackageManager } = require("../src/detect");
const { installDependencies } = require("../src/installer");
const {
  createJestConfig,
  createJestSetup,
  createBabelConfig,
} = require("../src/generator");
const logger = require("../src/logger");

async function runSetup() {
  logger.info("Starting next-jest-boost setup...");

  if (!isNext()) {
    logger.error("This project does not appear to be a Next.js project.");
    process.exit(1);
  }

  const ts = isTypeScript();
  const pkgManager = getPackageManager();

  logger.info(`Detected Next.js project.`);
  logger.info(`TypeScript detected: ${ts}`);
  logger.info(`Package manager detected: ${pkgManager}`);

  try {
    installDependencies(pkgManager, ts);

    createJestConfig(ts);
    createJestSetup(ts);
    createBabelConfig();

    logger.success("Jest and Testing Library setup complete!");
  } catch (e) {
    logger.error("Setup failed: " + e.message);
    process.exit(1);
  }
}

module.exports = runSetup;
