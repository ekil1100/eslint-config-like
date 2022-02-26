# eslint-config-like

Personal eslint config. Supports typeScript, react, vue, next.js.

## Usage

```bash
pnpm add -D eslint eslint-config-like
```

### Basic

```js
module.exports = {
  extends: ['like'],
}
```

### React

```js
module.exports = {
  extends: ['like/react'],
}
```

### Next.js

```js
module.exports = {
  extends: ['like/next'],
}
```

### Vue

Default to vue3.

```js
module.exports = {
  extends: ['like/vue'],
}
```

<!--
### Svelte3

[eslint-plugin-svelte3](https://github.com/sveltejs/eslint-plugin-svelte3) require prettier plugin to format `.svelte` files.

```
yarn add -D prettier-plugin-svelte eslint-plugin-svelte3
```

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
``` -->

## Tips

### VSCode Settings

```json
{
  "eslint.format.enable": true,
  "eslint.validate": [
    "vue",
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "svelte",
    "json",
    "json5",
    "yaml",
    "yml"
  ]
}
```

### Babel parser

Sometimes, you may need add babel as parser for new language features. See [babel-eslint-parser](https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser) for more information.

```js
module.exports = {
  parser: '@babel/eslint-parser',
}
```

### Typescript path resolver

To enable typescript path resolvers in `.js` files, you can add settings:

```js
module.exports = {
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
}
```

### No need `import React from 'react'`?

If you are using react 17, you don't need to import React for JSX. See https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports.

⚠ It is default after v4.
