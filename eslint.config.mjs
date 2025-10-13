import prettier from 'eslint-plugin-prettier'

import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import unusedImports from 'eslint-plugin-unused-imports'
import importPlugin from 'eslint-plugin-import'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

const config = [
  ...compat.extends('next/core-web-vitals', 'plugin:prettier/recommended'),
  {
    plugins: {
      import: importPlugin,
      'unused-imports': unusedImports,
      prettier: prettier,
    },
    settings: {
      'import/resolver': {
        typescript: { project: ['./tsconfig.json'], alwaysTryTypes: true },
        node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      },
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'],
            'internal',
            ['sibling', 'parent', 'type'],
            'index',
          ],
          pathGroups: [
            {
              pattern:
                '{next,next/**,react,react-dom,react-dom/**,react-hot-toast,@tanstack/react-query,preline/preline}',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '{@/*,@/**/*}',
              group: 'internal',
              position: 'before',
            },
          ],
          'newlines-between': 'always',
          pathGroupsExcludedImportTypes: [
            'next/**',
            'react',
            'react-dom/**',
            'react-hot-toast',
            '@tanstack/react-query',
            'preline/preline',
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'prettier/prettier': 'error',
    },
    ignores: [
      'node_modules/',
      'dist/',
      'next/',
      'build/',
      '*.min.js',
      '*.bundle.js',
      'eslint.config.mjs',
    ],
  },
]

export default config
