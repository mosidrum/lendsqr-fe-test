/* eslint-disable import/no-unresolved */
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import react from 'eslint-plugin-react';
import unicorn from 'eslint-plugin-unicorn';
import sonarjs from 'eslint-plugin-sonarjs';
import _import from 'eslint-plugin-import';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import eslintConfigPrettier from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    {
        ignores: ['**/node_modules/', '**/.next/']
    },
    ...fixupConfigRules(
      compat.extends(
        'airbnb',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:unicorn/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended'
      )
    ),
    {
        plugins: {
            '@typescript-eslint': fixupPluginRules(typescriptEslint),
            react: fixupPluginRules(react),
            unicorn: fixupPluginRules(unicorn),
            sonarjs: fixupPluginRules(sonarjs),
            import: fixupPluginRules(_import)
        },

        languageOptions: {
            globals: {
                ...globals.browser
            },

            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: 'module'
        },

        settings: {
            'import/resolver': {
                node: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx']
                }
            }
        },

        rules: {
            'react/react-in-jsx-scope': 'off',
            'no-duplicate-imports': 'error',
            '@typescript-eslint/comma-dangle': 'off',
            'comma-dangle': 'off',

            'react/function-component-definition': [
                'error',
                {
                    namedComponents: 'arrow-function',
                    unnamedComponents: 'arrow-function'
                }
            ],

            'react/jsx-filename-extension': [
                1,
                {
                    extensions: ['.js', '.jsx', '.ts', '.tsx']
                }
            ],

            'unicorn/filename-case': 'off',
            'unicorn/prevent-abbreviations': 'off',
            'react/require-default-props': 'off',
            'import/prefer-default-export': 'off',
            'import/no-extraneous-dependencies': 'off',
            'no-console': 'error',
            'react/button-has-type': 'off',
            'jsx-a11y/no-static-element-interactions': 'off',
            'jsx-a11y/click-events-have-key-events': 'off',
            'react/no-array-index-key': 'off',
            'implicit-arrow-linebreak': 'off',
            'function-paren-newline': 'off',
            'object-curly-newline': 'off',
            'react/jsx-props-no-spreading': 'off',
            'react/jsx-wrap-multilines': 'off',
            'react/prop-types': 'off',
            'react/jsx-one-expression-per-line': 'off',
            'no-underscore-dangle': 'off',
            'linebreak-style': 'off',
            'no-confusing-arrow': 'off',
            'react/jsx-curly-newline': 'off',
            'unicorn/expiring-todo-comments': 'off',
            'unicorn/no-null': 'off',
            'unicorn/no-array-for-each': 'off',
            '@typescript-eslint/indent': 'off',
            'unicorn/catch-error-name': 'off',
            'operator-linebreak': 'off',
            'no-nested-ternary': 'off',
            'no-use-before-define': 'off',
            '@typescript-eslint/no-var-requires': 'off',

            'max-len': [
                'error',
                {
                    code: 120
                }
            ],

            'import/no-mutable-exports': 'off',
            'import/no-unresolved': ['error'],
            'import/extensions': 'off',
            'global-require': 'off',
            'unicorn/prefer-module': 'off',
            'no-plusplus': 'off',
            '@typescript-eslint/no-require-imports': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn'
        }
    },
    eslintConfigPrettier
];
