module.exports = {
  extends: ['../../index', '../../react'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['../../typescript'],
    },
  ],
}
