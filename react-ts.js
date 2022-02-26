module.exports = {
  extends: ['./react'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['./ts-config'],
    },
  ],
}
