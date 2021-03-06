module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'no-console': 0,
    'semi': 0,
    'arrow-parens': 0,
    'indent': 0,
    'import/prefer-default-export': 0,
    'no-shadow': 0,
    'no-undef': 0,
    'import/no-cycle': 0,
  },
}
