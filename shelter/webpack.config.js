const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const config = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    main: path.resolve(__dirname, 'pages/main/script.js'),
    pets: path.resolve(__dirname, 'pages/pets/script.js'),
  },
  output: {
    filename: '[name]/script.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'main/index.html',
      template: path.join(__dirname, 'pages/main/index.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'pets/index.html',
      template: path.join(__dirname, 'pages/pets/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name]/style.css',
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        main: {
          type: 'css/mini-extract',
          name: 'main',
          chunks: (chunk) => {
            return chunk.name === 'main';
          },
          enforce: true,
        },
        pets: {
          type: 'css/mini-extract',
          name: 'pets',
          chunks: (chunk) => {
            return chunk.name === 'pets';
          },
          enforce: true,
        },
      },
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
};

module.exports = config;
