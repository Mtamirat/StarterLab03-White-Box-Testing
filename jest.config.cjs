
module.exports = {
    testEnvironment: "jsdom",
    roots: ["<rootDir>/src"],
    testMatch: ["**/*.test.ts?(x)"],
    transform: {
      "^.+\\.(ts|tsx)$": [
        "ts-jest",
        {
          tsconfig: {
            module: "CommonJS",
            jsx: "react-jsx",
            esModuleInterop: true
          }
        }
      ]
    },
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"]
  };
  