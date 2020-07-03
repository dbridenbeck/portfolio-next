module.export = {
  roots: ["<rootDir>/src"],
  transform: {
    "^+\\.tsx?$": "ts-jest",
  },
  testPathIgnorePatterns: ["/node_modules/", "/public/"],
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "@testing-library/react/cleanup-after-each",
  ], // setupFiles before the tests are ran
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};