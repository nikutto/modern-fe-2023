module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    env: {
      browser: true,
      es2021: true,
    },
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      project: "./tsconfig.eslint.json",
      tsconfigRootDir: __dirname,
    },
    extends: [
      "airbnb-base",
      "airbnb-typescript/base",
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
      "prettier"
    ],
    ignorePatterns: ["dist"],
    rules: {
      "@typescript-eslint/quotes": ["error", "double"],
      "import/extensions": "off"
    },
  
};