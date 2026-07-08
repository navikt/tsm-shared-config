import { defineConfig } from 'oxlint'

export default defineConfig({
    plugins: ['react', 'react-perf', 'jsx-a11y'],
    rules: {
        'react/rules-of-hooks': 'error',
        'react/jsx-curly-brace-presence': 'warn',
    },
})
