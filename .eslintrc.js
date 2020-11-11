module.exports = {
  root: true,

  env: {
    browser: true,
  },

  parserOptions: {
    parser: 'babel-eslint',
  },

  extends: [
    'akarion/vue',
  ],

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
