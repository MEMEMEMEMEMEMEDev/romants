/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src"],

  // Jest transformations -- this adds support for TypeScript
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx?)$",

  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  // Setup the module loader

  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
};
