module.exports = {
  extends: ['./index'],
  overrides: [
    {
      files: ['*.svelte'],
      processro: 'svelte3/svelte3',
    },
  ],
}
