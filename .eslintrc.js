module.exports = {
  root: true,
  parserOptions: {
    // Habilita await na root
    ecmaVersion: 'latest',
  },
  env: {
    browser: true,
    node: true,
    jest: true
  },
  extends: [
    'standard'
  ],
  rules: {
    quotes: ['error', 'single'],
    // Problema ao tentar criar componente index
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 3
      },
      multiline: {
        max: 1
      }
    }]
  },
  overrides: [
    {
      // Habilitar mjs na configuração do eslint da IDE
      files: ['*.mjs']
    }
  ]
}
