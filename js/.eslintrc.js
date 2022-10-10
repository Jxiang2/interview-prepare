module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },

  ignorePatterns: ["node_modules"],

  extends: ["prettier"],

  overrides: [],

  parserOptions: {
    ecmaVersion: "latest",
  },

  // use prettier to override eslint rules
  plugins: ["prettier"],

  rules: {
    "prettier/prettier": "error",

    "linebreak-style": ["error", "unix"],

    quotes: ["error", "double"],

    "no-console": ["error", { allow: ["log", "dir"] }],
  },
}
