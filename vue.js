module.exports = {
    extends: ['./index'],
    overrides: [
        {
            files: ['*.vue'],
            extends: ['plugin:vue/vue3-recommended'],
            rules: {
                'no-unused-vars': 'off',
                'no-undef': 'off',
                'vue/max-attributes-per-line': 'off',
                'vue/no-v-html': 'off',
                'vue/require-prop-types': 'off',
                'vue/require-default-prop': 'off',
                'vue/multi-word-component-names': 'off',
            },
        },
    ],
}
