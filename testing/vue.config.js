module.exports = {
  devServer: {
    proxy: {
        'send/': {
            target: 'http://localhost:8000'
        }
    }
  }
}