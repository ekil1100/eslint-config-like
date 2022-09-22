module.exports = {
    extends: ['./solid'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: ['./ts-config', 'plugin:solid/typescript'],
        },
    ],
}
