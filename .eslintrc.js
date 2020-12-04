module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'eslint-plugin-react',
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],

  rules: {
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'no-trailing-spaces': 'error',
    'no-console': 'error',
    'no-unused-vars': 'warn',
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
}
