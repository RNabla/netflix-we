const path = require('path');

module.exports = {
    entry: './src/playback.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'playback.js'
    },
    mode: 'production'
};