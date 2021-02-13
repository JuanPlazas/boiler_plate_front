const path = require('path');

const sourcePath = path.join(__dirname, './src');
const outPath = path.join(__dirname, './dist');

module.exports = {
  context: sourcePath,
  entry: {
    main: './index.tsx'
  },
  output: {
    path: outPath,
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  target: 'web',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json', '.jsx'],
    mainFields: ['browser', 'main']
  },
  stats: {
    warnings: false,
    entrypoints: false,
    children: false,
    modules: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ],
  },

  devtool: 'inline-source-map',

  // EVIROMENT MODE
  mode: process.env.NODE_ENV || 'development',

  // DEV SERVER ENTRY POINT
  devServer: {
    contentBase: sourcePath,
    port: 3002,
    watchContentBase: true,
    open: true,
    historyApiFallback: true,
  },

  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};