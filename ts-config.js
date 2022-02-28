module.exports = {
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    settings: {
        'import/resolver': {
            // https://github.com/alexgorbatchev/eslint-import-resolver-typescript#configuration
            typescript: {},
        },
    },
    rules: {
        '@typescript-eslint/type-annotation-spacing': 'error',

        // override JS
        'no-useless-constructor': 'off',
        'indent': 'off',
        '@typescript-eslint/indent': ['error', 4],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
        'brace-style': 'off',
        '@typescript-eslint/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
        'object-curly-spacing': 'off',
        '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    },
}
