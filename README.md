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

Svelte require prettier plugin to format `.svelte` files.

```
yarn add -D prettier-plugin-svelte
```

Using [eslint-plugin-svelte3](https://github.com/sveltejs/eslint-plugin-svelte3).

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

### Useful tricks

#### Recommended `.prettierrc`

```json
{
  "arrowParens": "always",
  "bracketSpacing": true,
  "endOfLine": "lf",
  "jsxBracketSameLine": false,
  "jsxSingleQuote": true,
  "printWidth": 90,
  "quoteProps": "as-needed",
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "useTabs": false
}
```

#### Babel parser

Sometimes, you may need add babel as parser for new language features. See [babel-eslint-parser](https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser) for more information.

```js
module.exports = {
  parser: '@babel/eslint-parser',
}
```

#### Typescript path resolver

To enable typescript path resolvers in `.js` files, you can do this:

```js
module.exports = {
  extends: ['like', 'like/react'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['like/typescript'],
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
}
```
