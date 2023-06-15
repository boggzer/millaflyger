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
    'plugin:@next/next/recommended'
  ],

  rules: {
    'no-unused-vars': 'off',
    quotes: ['warn', 'single', { "allowTemplateLiterals": true }],
    indent: 'off',
    'no-trailing-spaces': 'warn',
    'no-console': 'warn',
    'no-unused-vars': [
      'off',
      { argsIgnorePattern: '^_', ignoreRestSiblings: true },
    ],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/prop-types': 'off',
    '@typescript-eslint/no-empty-interface': ['off'],
    'react/no-unknown-property': ['off']
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
