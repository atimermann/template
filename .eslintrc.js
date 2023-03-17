module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest' // Habilita await na root
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    'standard'
  ],
  rules: {
    quotes: ['error', 'single']
  }
}
