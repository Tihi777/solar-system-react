module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',

    'arrow-parens': ['error', 'as-needed'],
    'no-underscore-dangle': ['error', { allow: ['__REDUX_DEVTOOLS_EXTENSION__', '__REDUX_DEVTOOLS_EXTENSION__'] }],
    'no-unused-vars': 'warn',
    'linebreak-style': 'off',
    'no-return-assign': 'off',
    'no-multi-assign': 'off',
    'object-curly-newline': 'off',
    'no-shadow': 'off',
    'prefer-const': 'off',
  },
};
