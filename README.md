# 📦 next-jest-boost

A CLI tool to automatically setup Jest + Testing Library for Next.js projects, supporting JavaScript and TypeScript, and npm, yarn, pnpm package managers.

## Features

- Detects Next.js projects
- Detects TypeScript usage
- Detects package manager (npm, yarn, pnpm)
- Installs required dependencies
- Generates `jest.config.js`, `jest.setup.ts/js`, and `babel.config.js`
- Provides friendly CLI logs

## 🚀 Usage

After installing with:

```bash
npm install -D next-jest-boost
```

or

```bash
npx next-jest-boost
```

### globally

```bash
npm install -g next-jest-boost
```

or

```bash
yarn global add next-jest-boost
```

or

```bash
pnpm add -g next-jest-boost
```

### Run in your Next.js project:

```bash
npx next-jest-boost
```

### The script will automatically:

✅ Detect the project type (JavaScript or TypeScript)

✅ Install all required packages:

jest, @testing-library/react, @testing-library/jest-dom, jest-environment-jsdom, etc.

✅ Create necessary files:

jest.config.js

jest.setup.js or jest.setup.ts

babel.config.js (if needed)

## Generated Files

jest.config.js

```bash
const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // or .js depending on the project
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
};

module.exports = createJestConfig(customJestConfig);
```

jest.setup.ts or jest.setup.js

```bash
import 'jest-environment-jsdom';
import '@testing-library/jest-dom';
babel.config.js
module.exports = {
  presets: ['next/babel'],
};
```

## Writing Tests

You can now write your tests like this:

Example.test.tsx

```bash
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('renders the heading', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /welcome/i })).toBeInTheDocument();
  });
});
```

## Contributing

Pull requests are welcome! To contribute:

```bash
git clone https://github.com/costa-everton/next-jest-boost.git
```

```bash
cd next-jest-boost
```

```bash
yarn install
```

```bash
yarn link
```

Now the next-jest-boost command will be available locally for testing.

## Requirements

- Node.js >= 12
- Next.js project

## License

MIT © Everton Costa
