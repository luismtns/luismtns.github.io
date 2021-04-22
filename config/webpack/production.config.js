var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var appConfig = require('./../App');
var appEnv = process.env.APP_ENV || 'production';

var sassLoaders = [
  'css-loader',
  'sass-loader',
];

var orderByList = function(list) {
  return function(chunk1, chunk2) {
    var index1 = list.indexOf(chunk1.names[0]);
    var index2 = list.indexOf(chunk2.names[0]);
    if (index2 == -1 || index1 < index2) {
      return -1;
    }
    if (index1 == -1 || index1 > index2) {
      return 1;
    }
    return 0;
  };
};

module.exports = {
  devtool: false,
  debug: false,
  sassLoader: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: sassLoaders.join('!')
  }),
  output: {
    path: path.join(process.cwd(), 'build'),
    filename: 'assets/bundle-[name].js',
    chunkFilename: 'assets/bundle-[name]-[chunkhash].js',
    publicPath: (appConfig.baseUrl + appConfig.path)
  },
  plugins: [
    new UglifyJSPlugin({
      parallel: true,
      uglifyOptions: {
        ecma: 5,
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ['vendor', 'config', 'app'],
      chunksSortMode: orderByList(['vendor', 'config', 'app']),
      inject: true,
      hash: true,
      minify: true,
      scriptLoading: 'defer',
      filename: 'index.html',
      template: 'views/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'APP_ENV': JSON.stringify(appEnv)
      }
    }),
    new ExtractTextPlugin({
      filename: 'assets/[name]-[contenthash].css',
      allChunks: true,
    })
  ]
};
