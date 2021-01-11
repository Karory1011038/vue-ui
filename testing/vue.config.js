module.exports = {
    outputDir: '../dist',
    assetsDir: 'static/vue',
    devServer: {
        proxy: {
            'send/': {
                target: 'http://localhost:8000'
            }
        }
    }
}