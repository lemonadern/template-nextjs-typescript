module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'next/core-web-vitals',
    'google',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import', 'unused-imports'],
  rules: {
    /* style */
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'require-jsdoc': ['off'],
    'newline-before-return': 'error',
    /* react-hooks */
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    /* react */
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-props': 'error',
    'react/jsx-curly-brace-presence': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: false,
      },
    ],
    /* Typescript */
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-function-return-type': 2,
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': {
            fixWith: 'object',
            message: 'Use Record<string, unknown> or EmptyObject instead',
          },
          object: {
            fixWith: 'object',
            message: 'Use Record<string, unknown> or EmptyObject instead',
          },
        },
      },
    ],
    /* import */
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'import/no-duplicates': 'error',
  },
}
