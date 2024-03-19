module.exports = {
	extends: ['eslint-config-codely/typescript'],
	rules: {
		'no-console': '0'
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			parserOptions: {
				project: ['./tsconfig.json']
			},
			rules: {
				'@typescript-eslint/no-floating-promises': 'warn'
			}
		}
	]
};
