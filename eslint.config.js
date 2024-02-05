import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  ignores: [
    'node_modules',
    '.drizzle',
    '.nuxt',
    '.output',
    'dist',
    'components/ui',
  ],
})
