// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    rules: {
      'no-console': 'warn',                   // Warn on console.log, etc.
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Ignore unused args starting with _
      'react/jsx-boolean-value': ['warn', 'never'], // Avoid `boolean={true}`
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    ignores: ['.expo/*', 'node_modules/*',],
  },
]);
