module.exports = {
  root: true,
  extends: ["@bavard/eslint-config-typescript/react"],
  parserOptions: {
    project: ["./tsconfig.json", "./tsconfig.demo.json"],
  },
  rules: {
    // ALL THESE RULES SHOULD BE REMOVED TO ENSURE BEST PRACTICES
  },
};
