var path = require('path');
var webpack = require('webpack');
var NpmInstallPlugin = require('npm-install-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        'babel-polyfill',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new NpmInstallPlugin()
    ],
    resolve: {
        root: path.resolve(__dirname),
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            loaders: ['react-hot', 'babel-loader'],
            include: [
                path.resolve(__dirname, "src"),
            ],
            test: /\.jsx?$/,
            plugins: ['transform-runtime'],
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader!postcss-loader"
        }]
    },
    postcss: function () {
        return [autoprefixer, precss];
    }
};