# eslint-config-like

Personal eslint config.

## Usage

```bash
yarn add -D eslint prettier eslint-config-like
```

### React

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

#### Next.js

```js
module.exports = {
  extends: ['like', 'like/react', 'like/nextjs'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['like/typescript'],
    },
  ],
}
```

### Vue3

```js
module.exports = {
  extends: ['like', 'like/vue'],
}
```

With typescript

```js
module.exports = {
  extends: ['like', 'like/vue'],
  overrides: [
    {
      files: ['*.ts', '*.vue'],
      extends: ['like/typescript'],
    },
  ],
}
```

### Svelte3

```
yarn add -D eslint prettier prettier-plugin-svelte
```

Use [eslint-plugin-svelte3](https://github.com/sveltejs/eslint-plugin-svelte3). It need svelte-prepocess to parse code.

```js
module.exports = {
  extends: ['like/svelte'],
}
```

With typescript

```js
module.exports = {
  extends: ['like/svelte'],
  overrides: [
    {
      files: ['*.ts', '*.svelte'],
      extends: ['like/typescript'],
    },
  ],
  settings: {
    'svelte3/typescript': require('typescript'),
  },
}
```
