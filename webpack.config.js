import path from "path";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
    context: path.resolve('src'),
    entry: {
        test1: './test1.js',
        test2: './test2.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve('dist'),
    },
    plugins: [new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
    })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
};