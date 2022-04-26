const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '!!html-loader!templates/index.html'
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser'
    })
  ],
  devServer: {
    historyApiFallback: true,
  },
  devtool: 'source-map',
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['@babel/plugin-transform-runtime'],
              presets: ['@babel/preset-env', '@babel/preset-react'],
            }
          }
        ],
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [ 'style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  }
};
