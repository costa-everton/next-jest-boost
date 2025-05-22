const { execSync } = require('child_process');
const logger = require('./logger');

const basePackages = [
  'jest',
  '@testing-library/react',
  '@testing-library/jest-dom',
  'jest-environment-jsdom',
  'babel-jest',
  '@babel/preset-env',
  '@babel/preset-react',
];

const tsPackages = ['@types/jest', 'ts-node'];

function installDependencies(packageManager, isTypeScript) {
  const packages = isTypeScript ? [...basePackages, ...tsPackages] : basePackages;

  let installCommand = '';
  switch (packageManager) {
    case 'yarn':
      installCommand = `yarn add --dev ${packages.join(' ')}`;
      break;
    case 'pnpm':
      installCommand = `pnpm add -D ${packages.join(' ')}`;
      break;
    default:
      installCommand = `npm install --save-dev ${packages.join(' ')}`;
  }

  logger.info(`🚀 Installing dependencies using ${packageManager}...`);
  execSync(installCommand, { stdio: 'inherit' });
  logger.success('✅ Dependencies installed successfully.');
}

module.exports = { installDependencies };