const fs = require("fs");

function createJestConfig(isTypeScript) {
  const content = `
const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.${isTypeScript ? "ts" : "js"}'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
};

module.exports = createJestConfig(customJestConfig);
  `.trim();

  fs.writeFileSync("jest.config.js", content + "\n");
  console.log("✅ jest.config.js created");
}

function createJestSetup(isTypeScript) {
  const filename = `jest.setup.${isTypeScript ? "ts" : "js"}`;
  const content = `
import 'jest-environment-jsdom';
import '@testing-library/jest-dom';
  `.trim();

  fs.writeFileSync(filename, content + "\n");
  console.log(`✅ ${filename} created`);
}

function createBabelConfig() {
  const content = `
module.exports = {
  presets: ['next/babel'],
};
  `.trim();

  fs.writeFileSync("babel.config.js", content + "\n");
  console.log("✅ babel.config.js created");
}

module.exports = {
  createJestConfig,
  createJestSetup,
  createBabelConfig,
};
