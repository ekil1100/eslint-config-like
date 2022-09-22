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

with typescript

```js
module.exports = {
  extends: ['like/ts'],
}
```

### React

```js
module.exports = {
  extends: ['like/react'],
}
```

with typescript

```js
module.exports = {
  extends: ['like/react-ts'],
}
```

with next.js

```js
module.exports = {
  extends: ['like/react', 'like/next'],
}
```

### Vue

Default to vue3.

```js
module.exports = {
  extends: ['like/vue'],
}
```

with typescript

```js
module.exports = {
  extends: ['like/vue-ts'],
}
```

## Tips

### VSCode Settings

```json
{
  "eslint.probe": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "json",
    "jsonc",
    "json5",
    "yml",
    "yaml"
  ],
  "[javascript][javascriptreact][typescript][typescriptreact]": {
    "editor.formatOnSave": false,
    "editor.formatOnPaste": false,
    "editor.formatOnType": false,
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  }
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

<!-- https://github.com/antfu/eslint-config/blob/master/packages/basic/index.js -->
