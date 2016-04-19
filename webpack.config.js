module.exports = {
  entry: [
    './client/src/index.js'
  ],
  output: {
    path: __dirname + '/client/',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }],
    postLoaders: [
    { loader: "transform?brfs" }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './client'
  }
};
