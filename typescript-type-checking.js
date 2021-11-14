module.exports = {
  // https://typescript-eslint.io/docs/linting/type-linting
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
}
