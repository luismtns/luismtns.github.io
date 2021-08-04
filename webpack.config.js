var webpack = require("webpack");
var path = require("path");

var env = process.env.NODE_ENV || "development";
var isStorybook = process.env.STORYBOOK || false;

var config = require("./config/webpack/" + env + ".config");

var packageJson = require("./package.json");

var vendorDependencies = Object.keys(packageJson.dependencies);

var entries = {
  vendor: vendorDependencies,
  app: __dirname + "/src/index.js",
};

var plugins = [
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: config.debug,
    options: {
      context: __dirname,
    },
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: "vendor",
    filename: "assets/vendor-[hash].js",
    minChunks: Infinity,
  }),
];

if (config.plugins) {
  for (var i = 0, l = config.plugins.length; i < l; i++) {
    var plugin = config.plugins[i];

    plugins.push(plugin);
  }
}

module.exports = {
  devtool: config.devtool,
  entry: entries,
  output: config.output,
  context: path.resolve(__dirname, "src"),
  node: {
    fs: "empty",
  },
  devServer: {
    inline: true,
    hot: true,
    host: "0.0.0.0",
    contentBase: "./public",
    port: process.env.PORT || 4000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader",
            query: { compact: false },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        use: [
          {
            loader: "json-loader",
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg|mp4|webm)/,
        use: [
          {
            loader: "url-loader?limit=10000&name=assets/[name]-[hash].[ext]",
          },
        ],
      },
      {
        test: /public\//,
        use: [
          {
            loader: "file-loader?name=[path][name].[ext]&context=./public",
          },
        ],
      },
      {
        test: /\.s?css$/,
        use: [
          ...config.sassLoader,
          {
            loader: "sass-resources-loader",
            options: {
              resources: ["./src/config/stylesheets/includes/**/*.scss"],
            },
          },
        ],
      },
      {
        test: /(\.woff|\.woff2|\.svg|.eot|\.ttf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader?limit=1&name=fonts/[name]-[hash].[ext]",
          },
        ],
      },
    ],
  },
  plugins: plugins,
  target: "web",
};
