// eslint-disable-next-line no-undef
module.exports = {
  testPathIgnorePatterns: ['/__tests__/fixtures', '/__tests__/utils'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  collectCoverage: true,
  testEnvironment: 'node',
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'html'],
  collectCoverageFrom: ['src/**/*.ts*'],
};
