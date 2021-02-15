import type { Config } from '@jest/types'

// Sync object
const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/source/*.ts',
    '<rootDir>/source/**/*.ts',
  ],
  roots: ['<rootDir>'],
};
export default config
