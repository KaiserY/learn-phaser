const webpack = require('webpack');
const helpers = require('./helpers');

const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');


const METADATA = {
  title: 'Angular2 Webpack Starter',
  baseUrl: '/'
};

module.exports = function (options) {
  isProd = options.env === 'production';
  return {
    entry: {
      'polyfills': './src/polyfills.browser.ts',
      'vendor': './src/vendor.browser.ts',
      'app': './src/main.browser.ts'
    },

    resolve: {
      extensions: ['.ts', '.js', '.json', '.scss'],
      modules: [
        helpers.root('src'),
        'node_modules']
    },

    module: {
      loaders: [{
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader'
        ],
        exclude: [/\.(spec|e2e)\.ts$/]
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: [helpers.root('src/index.html')]
      }, {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      }, {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loaders: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: ['css'] })
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style', 'css', 'resolve-url?fail', 'sass?sourceMap']
        // loaders: ExtractTextPlugin.extract({fallbackLoader: 'style', loader: ['css', 'resolve-url', 'sass?sourceMap']})
      }]
    },

    plugins: [
      new ForkCheckerPlugin(),
      new CommonsChunkPlugin({
        name: ['polyfills', 'vendor']
      }),
      new ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        helpers.root('src') // location of your src
      ),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        title: METADATA.title,
        chunksSortMode: 'dependency',
        metadata: METADATA,
        inject: 'head'
      }),
      new CopyWebpackPlugin([{
        from: 'src/electron.js'
      }]),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'defer'
      }),
      new LoaderOptionsPlugin({})
    ],

    node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
  };
}
