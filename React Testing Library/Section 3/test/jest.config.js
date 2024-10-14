export default {
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    testEnvironment: "jest-environment-jsdom",
    extensionsToTreatAsEsm: ['.jsx'],
    globals: {
      'babel-jest': {
        useESM: true,
      },
    },
  };
  