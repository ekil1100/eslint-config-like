module.exports = {
  extends: ['plugin:vue/vue3-recommended', 'prettier/vue'],
  rules: {
    /**
     * FIXME This should not be right
     * the component import in script tag will always not be used
     */
    'no-unused-vars': 'off',
  },
}
