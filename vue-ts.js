module.exports = {
    extends: ['./ts'],
    overrides: [
        {
            files: ['*.vue'],
            extends: ['plugin:vue/vue3-recommended'],
            parser: 'vue-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
            },
            rules: {
                'no-unused-vars': 'off',
                'no-undef': 'off',
                '@typescript-eslint/no-unused-vars': 'off',
                'vue/max-attributes-per-line': 'off',
                'vue/no-v-html': 'off',
                'vue/require-prop-types': 'off',
                'vue/require-default-prop': 'off',
                'vue/multi-word-component-names': 'off',
            },
        },
    ],
}
