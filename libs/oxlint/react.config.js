import { defineConfig } from 'oxlint'

export default defineConfig({
    plugins: ['react', 'react-perf'],
    rules: {
        'react/rules-of-hooks': 'error',
        'react/jsx-curly-brace-presence': 'warn',
    },
})
