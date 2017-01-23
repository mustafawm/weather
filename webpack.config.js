let webpack = require('webpack');

module.exports = {
    entry: {
        bundle: './src/main.js',
        vendor: ['react', 'react-dom']
    },

    output: {
        path: './dist',
        filename: '[name].js'
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            },
        ]
    },

    devServer: {
        noInfo: true,
        port: 5000,
        inline: true,
        contentBase: 'dist/'
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor']
        })
    ]
};

/*----------------------------------------
| env = prod
|----------------------------------------*/
if (process.env.NODE_ENV === 'prod') {

    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            sourcemap: true,
            compress: {
                warnings: false
            }
        }),

        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: 'prod'
            }
        })
    );
}