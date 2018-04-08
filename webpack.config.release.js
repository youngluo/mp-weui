const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const utils = require('./build/utils');
const webpack = require('webpack');
const path = require('path');

const ROOT_PATH = path.resolve(__dirname);
const LIB_PATH = path.resolve(ROOT_PATH, 'lib');

const rules = [
  {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
      loaders: {
        css: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'vue-style-loader'
        })
      }
    },
  },
  {
    test: /\.js$/,
    use: 'babel-loader',
  },
  {
    test: /\.wxss$/,
    use: ExtractTextPlugin.extract({
      use: [
        {
          loader: 'css-loader',
          options: {
            minimize: false,
          }
        },
        {
          loader: 'postcss-loader',
        }
      ],
      fallback: 'vue-style-loader'
    }),
  },
]

const webpackConfig = {
  entry: {
    'mp-weui': './packages/index.js',
  },
  module: {
    rules,
  },
  devtool: false,
  output: {
    path: LIB_PATH,
    filename: '[name].js',
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //   },
    //   sourceMap: false,
    // }),
    new ExtractTextPlugin('style.css'),
    // new OptimizeCSSPlugin({
    //   cssProcessorOptions: {
    //     safe: true,
    //   },
    // }),
    // new CopyWebpackPlugin([
    //   {
    //     from: './node_modules/weui-wxss/dist/style/weui.wxss',
    //     to: path.resolve(ROOT_PATH, 'weui-wxss/weui.css'),
    //     ignore: ['.*'],
    //   },
    // ]),
  ],
  resolve: {
    extensions: ['.js', '.vue'],
  },
};

module.exports = webpackConfig;
