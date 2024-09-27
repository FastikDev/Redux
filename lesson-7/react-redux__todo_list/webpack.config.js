const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = (_, argv) => {
  const isProduction = argv.mode === 'production';

  const plugins = [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ];

  if (isProduction) {
    plugins.push(new MiniCssExtractPlugin({ filename: '[name].css' }));
  }

  return {
    entry: './src/index.jsx',
    output: {
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /.(js|jsx?)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /.s?css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    plugins,
    devServer: {
      historyApiFallback: true,
      open: true,
      hot: true,
      port: 8080,
    },
  };
};
