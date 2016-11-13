const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

/**
 * Webpack Plugins
 */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const IgnorePlugin = require('webpack/lib/IgnorePlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

/**
 * Webpack Constants
 */
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const METADATA = webpackMerge(commonConfig({ env: ENV }).metadata, {
  host: HOST,
  port: PORT,
  ENV: ENV
});

module.exports = function (env) {
  return webpackMerge(commonConfig({ env: ENV }), {
    devtool: 'source-map',

    output: {
      path: helpers.root('app/dist'),
      publicPath: '',
      filename: '[name].[chunkhash].bundle.js',
      sourceMapFilename: '[name].[chunkhash].bundle.map',
      chunkFilename: '[id].[chunkhash].chunk.js'
    },

    plugins: [
      new WebpackMd5Hash(),
      new DefinePlugin({
        'ENV': JSON.stringify(METADATA.ENV),
        'process.env': {
          'ENV': JSON.stringify(METADATA.ENV),
          'NODE_ENV': JSON.stringify(METADATA.ENV),
        }
      }),
      new UglifyJsPlugin({
        // beautify: true, //debug
        // mangle: false, //debug
        // dead_code: false, //debug
        // unused: false, //debug
        // deadCode: false, //debug
        // compress: {
        //   screw_ie8: true,
        //   keep_fnames: true,
        //   drop_debugger: false,
        //   dead_code: false,
        //   unused: false
        // }, // debug
        // comments: true, //debug


        beautify: false, //prod
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        }, //prod
        compress: {
          screw_ie8: true
        }, //prod
        comments: false //prod
      }),
      new ExtractTextPlugin('[name].[chunkhash].bundle.css'),
      new LoaderOptionsPlugin({
        debug: false,
        options: {
          tslint: {
            emitErrors: true,
            failOnHint: true,
            resourcePath: 'src'
          },

          htmlLoader: {
            minimize: true,
            removeAttributeQuotes: false,
            caseSensitive: true,
            customAttrSurround: [
              [/#/, /(?:)/],
              [/\*/, /(?:)/],
              [/\[?\(?/, /(?:)/]
            ],
            customAttrAssign: [/\)?\]?=/]
          },
          context: helpers.root('src'),
          output: {
            path: helpers.root('app/dist')
          }
        }
      }),
      new BrowserSyncPlugin({
        host: HOST,
        port: PORT,
        files: "app/dist/**/*",
        server: { baseDir: ['app/dist/'] },
        open: false
      })
    ]
  });
}
