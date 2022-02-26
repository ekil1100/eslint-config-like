module.exports = {
  extends: ['./index'],
  overrides: [
    {
      files: ['*.ts'],
      extends: ['./ts-core'],
    },
  ],
}
