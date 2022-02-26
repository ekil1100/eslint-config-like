module.exports = {
  extends: [
    './index',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  settings: {
    'react': {
      version: 'detect',
    },
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs'] },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['./ts'],
    },
  ],
}
