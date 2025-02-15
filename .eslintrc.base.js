'use strict';

module.exports = {
  extends: ['airbnb-base', 'eslint:recommended', 'prettier', 'plugin:import/recommended'],
  env: {
    es6: true,
    jest: true,
    node: true,
  },
  globals: {
    strapi: true,
  },
  rules: {
    strict: ['error', 'global'],
    'no-return-await': 'error',
    'object-shorthand': ['error', 'always', { avoidExplicitReturnArrows: true }],
    'class-methods-use-this': 'off',
    // 'max-classes-per-file': 'warn',
    'default-param-last': 'warn',
    'no-template-curly-in-string': 'warn',
  },
};
