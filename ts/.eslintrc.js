module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },

  ignorePatterns: ["node_modules", "dist", "package-lock.json"],

  extends: ["plugin:@typescript-eslint/recommended", "prettier"],

  overrides: [],

  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },

  plugins: ["@typescript-eslint", "prettier"],

  rules: {
    "prettier/prettier": "error",

    indent: ["error", 2],

    "linebreak-style": 0,

    quotes: ["error", "double"],

    semi: ["error", "always"],

    "no-console": ["error", { allow: ["log", "dir"] }],

    "@typescript-eslint/no-explicit-any": ["off"],

    "@typescript-eslint/no-unused-vars": ["off"],

    "@typescript-eslint/ban-ts-comment": ["off"],
  },
};
