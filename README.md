# eslint-config-like

Personal eslint config.

## Usage

```bash
yarn add -D eslint prettier eslint-config-like
```

```js
module.exports = {
  extends: ['like', 'like/typescript', 'like/react'],
}
```

If you are using mixed codebase with `js` and `ts`, you can do:

```js
module.exports = {
  extends: ['like', 'like/react'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['like/typescript'],
    },
  ],
}
```

For Vue project (only works with Vue3)

```js
module.exports = {
  extends: ['like', 'like/vue'],
}
```
