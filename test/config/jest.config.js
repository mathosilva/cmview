const url = require('../mock/url.mock.json').QA 

module.exports = {
    bail: 1,
    clearMocks: true,
    globals: {
      url
    },
    reporters: [
      "default"
    ],
    roots: [
      "../specs/"
    ],
    testEnvironment: "node",
    testMatch: [
      "**/specs/*.js?(x)"
    ],
    testPathIgnorePatterns: [
      "../node_modules/",
    ],
  };