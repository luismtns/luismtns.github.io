var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var appConfig = require('./../App');
var appEnv = process.env.APP_ENV || 'development';

var sassLoaders = [
  'style-loader',
  'css-loader?sourceMap',
  'sass-loader?sourceMap',
];

module.exports = {
  devtool: 'eval',
  debug: true,
  sassLoader: sassLoaders,
  output: {
    path: path.join(process.cwd(), 'src'),
    filename: 'assets/[name].js',
    chunkFilename: 'assets/[name]-[chunkhash].js',
    publicPath: (appConfig.baseUrl + appConfig.path)
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      filename: 'index.html',
      template: 'views/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
        'APP_ENV': JSON.stringify(appEnv)
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ]
};
