module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },

  extends: ["plugin:prettier/recommended"],

  overrides: [],

  parserOptions: {
    ecmaVersion: "latest",
  },

  // use prettier to override eslint rules
  plugins: ["prettier"],

  rules: {
    "linebreak-style": ["error", "unix"],

    "quotes": ["error", "double"],

    "no-console": ["error", { allow: ["log", "dir"] }],
  },
}
