module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			'jsx': true
		},
		ecmaVersion: 12,
		sourceType: 'module'
	},
	plugins: [
		'react',
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
