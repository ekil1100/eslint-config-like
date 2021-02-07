# eslint-config-like
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fekilzen%2Feslint-config-like.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fekilzen%2Feslint-config-like?ref=badge_shield)


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


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fekilzen%2Feslint-config-like.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fekilzen%2Feslint-config-like?ref=badge_large)