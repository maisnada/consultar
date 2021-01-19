// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  bail: true,
  clearMocks: true,
  testMatch: [
    "**/__tests__/**/*.test.ts",
  ],
  collectCoverage: true,
  collectCoverageFrom: ['./src/**/*.ts'],
  coverageDirectory: "__tests__/coverage",
  coverageProvider: "v8",
  coverageReporters: [
    "text-summary",
    "lcov"
  ],
};