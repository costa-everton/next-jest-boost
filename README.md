# next-jest-boost

A CLI tool to automatically setup Jest + Testing Library for Next.js projects, supporting JavaScript and TypeScript, and npm, yarn, pnpm package managers.

## Usage

Run this command in your Next.js project root:

```bash
npx next-jest-boost
```

Or install as dev dependency:

```bash
npm install -D next-jest-boost
npx next-jest-boost
```

## Features

- Detects Next.js projects
- Detects TypeScript usage
- Detects package manager (npm, yarn, pnpm)
- Installs required dependencies
- Generates `jest.config.js`, `jest.setup.ts/js`, and `babel.config.js`
- Provides friendly CLI logs

## Requirements

- Node.js >= 12
- Next.js project

## License

MIT