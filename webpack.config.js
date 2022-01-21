const path = require('path');

const config = {
    entry: './index.js', // File đầu vào
    output: { // File đầu ra
        filename: 'bundle.js', // Tên file đầu ra
        path: path.resolve(__dirname, 'build') // Nơi chưa file đầu ra
    },
    mode: 'development'
}

module.exports = config;