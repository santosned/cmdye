module.exports = {
  transform: {
    '^.+\\.m?(t|j)s$': '@swc/jest',
  },
  extensionsToTreatAsEsm: ['.ts'],
  testEnvironment: 'node',
  roots: ['tests'],
  collectCoverage: true,
  verbose: true,
  /* coverageReporters: ['text'], */
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};
