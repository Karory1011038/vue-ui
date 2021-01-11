module.exports = {
    outputDir: '../dist',
    assetsDir: 'static',
    devServer: {
        proxy: {
            'send/': {
                target: 'http://localhost:8000'
            }
        }
    }
}