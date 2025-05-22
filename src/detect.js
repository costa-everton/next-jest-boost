const fs = require('fs');
const path = require('path');

function isNext() {
  const pkgPath = path.join(process.cwd(), 'package.json');
  if (!fs.existsSync(pkgPath)) return false;

  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  if (pkg.dependencies && pkg.dependencies.next) return true;
  if (pkg.devDependencies && pkg.devDependencies.next) return true;

  return false;
}

function isTypeScript() {
  const tsconfig = path.join(process.cwd(), 'tsconfig.json');
  return fs.existsSync(tsconfig);
}

function getPackageManager() {
  if (fs.existsSync(path.join(process.cwd(), 'yarn.lock'))) {
    return 'yarn';
  }
  if (fs.existsSync(path.join(process.cwd(), 'pnpm-lock.yaml'))) {
    return 'pnpm';
  }
  return 'npm';
}

module.exports = {
  isNext,
  isTypeScript,
  getPackageManager,
};