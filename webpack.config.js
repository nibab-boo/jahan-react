const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '!!html-loader!templates/index.html'
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
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
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
    extensions: [ '.js', '.jsx' ],
    fallback: { 
    	"crypto": require.resolve("crypto-browserify"), 
      "stream": require.resolve("stream-browserify"), 
      "assert": require.resolve("assert"), 
      "http": require.resolve("stream-http"), 
      "https": require.resolve("https-browserify"), 
      "os": require.resolve("os-browserify"), 
      "url": require.resolve("url"),
      "path": require.resolve("path-browserify"),
      "util": require.resolve("util"),
      "stream-http": false,
      "os-browserify/browser": false,
      "browserify-zlib": false,
      "stream-browserify": false,
      "https-browserify": false,
      "-browserify": false,
      "zlib": false,
      "net": false,
      "tls": false,
      "fs": false,
      "child_process": require.resolve("process")

    }
  }
};