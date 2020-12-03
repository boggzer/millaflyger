module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
		node: true
	},
	files: ['**/*.ts?(x)'],
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'prettier',
		'prettier/react'
	],
	parserOptions: {
		ecmaFeatures: {
			'jsx': true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: [
		'react',
		'eslint-plugin-react',
		'@typescript-eslint'
	],
	rules: {
		quotes: ['error', 'single'],
		indent: ['error', 2], 
		'no-trailing-spaces': 'error',
		'no-console': 'error',
		'no-unused-vars': 'warn' 
	},
	settings: {
		react: {
			version: 'latest'
		}
	}
};
