import type { Config } from '@jest/types'

// Sync object
const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // preset: 'ts-node',
  verbose: true,
  collectCoverage: true,
  roots: ['<rootDir>/source'],
  setupFiles: ["jest-date-mock"],
};
export default config
