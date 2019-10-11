module.exports = {
  root: true,
  // parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    "parser": "babel-eslint"
  },
  env: {
    browser: true,
    node: true
  },
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    "arrow-parens": 0,
    // allow async-await
    "generator-star-spacing": 0,
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    // indent: ["error", "tab"],
    'no-tabs': 'off'
  }
};
