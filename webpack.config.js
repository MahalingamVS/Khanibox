var path = require('path');

module.exports = {
    mode: 'production',
    resolve: {
        extensions: ['.js', '.jsx', '.js', '.css'],
    },
    devtool: 'eval',
    entry: './src/index.js',
    output: {
        path: path.resolve('lib'),
        filename: 'index.js',
        publicPath: '/lib/'
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/, /\.css$/i],
                exclude: /(node_modules)/,
                use: "babel-loader",
            }, {
                test: /\.js$/,
                loaders: ['react-hot-loader/webpack', 'babel-loader?presets[]=react'],
                include: [path.join(__dirname, 'src')              ]
              }
        ]
    }
}