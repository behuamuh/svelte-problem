module.exports = {
	root: true,
	extends: ['eslint:recommended'],
	plugins: ['svelte3'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2019,
		allowImportExportEverywhere: true,
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	rules: {
		'import/no-anonymous-default-export': 'off',
		'comma-dangle': [
			'error',
			'always-multiline',
		],
		'semi': [
			'error',
			'always',
		],
		'object-curly-spacing': [
			'error',
			'always',
		],
		'array-bracket-spacing': [
			'error',
			'never',
		],
		'quotes': [
			'error',
			'single',
		],
		'jsx-quotes': [
			'error',
			'prefer-double',
		],
		'no-multiple-empty-lines': [
			'error',
			{
				'max': 2,
				'maxEOF': 0,
			},
		],
		'eol-last': [
			'error',
			'always',
		],
		'max-len': [
			'error',
			{
				'code': 120,
			},
		],
		'no-unused-vars': [
			'warn',
			{
				'ignoreRestSiblings': true,
			},
		],
		'no-extra-boolean-cast': 'off',
	},
};
