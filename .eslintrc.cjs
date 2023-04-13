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
    quotes: ['error', 'single']
  },
  overrides: [
    {
      // Habilitar mjs na configuração do eslint da IDE
      files: ['*.mjs']
    }
  ]
}
