module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [{
      test: /\.ts$/,
      loader: 'awesome-typescript-loader'
    }, {
      test: /\.html$/,
      loader: 'html'

    }, {
      test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
      loader: 'null'
    }, {
      test: /\.css$/,
      loader: 'null'
    }]
  }
}
