module.exports = {
  testMatch: ["<rootDir>/tests/**/*.(test).(ts|tsx)"],
  restoreMocks: true,
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/tests/svg.mock.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
};
