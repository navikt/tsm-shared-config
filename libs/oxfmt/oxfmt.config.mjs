import { defineConfig } from 'oxfmt'

export default defineConfig({
    semi: false,
    trailingComma: 'all',
    singleQuote: true,
    printWidth: 120,
    tabWidth: 4,
    sortPackageJson: false,
    overrides: [
        {
            files: ['*.md', '*.mdx'],
            options: {
                printWidth: 100,
                tabWidth: 2,
            },
        },
        {
            files: ['*.yml', '*.yaml'],
            options: {
                printWidth: 100,
                tabWidth: 2,
            },
        },
    ],
})
