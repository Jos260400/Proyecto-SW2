const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },

  plugins: [
    new MiniCssExtractPlugin({ filename: '[name]-bundle.css' }),
    new CleanWebpackPlugin(),

  ],

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
};
