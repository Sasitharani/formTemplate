import js from '@eslint/js'
import globals from 'globals'
<<<<<<< HEAD
import react from 'eslint-plugin-react'
=======
>>>>>>> 7d719bd5f23fafda78bf4f7c3c2cb01c1da599dd
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
<<<<<<< HEAD
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
=======
    plugins: {
>>>>>>> 7d719bd5f23fafda78bf4f7c3c2cb01c1da599dd
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
<<<<<<< HEAD
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
=======
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
>>>>>>> 7d719bd5f23fafda78bf4f7c3c2cb01c1da599dd
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
