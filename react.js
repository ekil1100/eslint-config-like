module.exports = {
  extends: ['plugin:react/recommended', 'plugin:jsx-a11y/recommended', 'prettier/react'],
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  globals: {
    React: 'readonly',
  },
}
