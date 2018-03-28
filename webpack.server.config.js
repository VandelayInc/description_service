const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const paths = {
  DIST: path.resolve(__dirname, 'public'),
  SRC: path.resolve(__dirname, 'client/src'),
  JS: path.resolve(__dirname, 'client/src/js'),
};


module.exports = {
  entry: path.join(paths.SRC, 'server.js'),
  output: {
    path: paths.DIST,
    filename: 'app-description.bundle-server.js',
  },
  target: 'node',
  externals: nodeExternals(),
  // plugins: [
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       NODE_ENV: `'production'`
  //     }
  //   })
  // ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ]
      },
      // CSS loader for CSS files
      // Files will get handled by css loader and then passed to the extract text plugin
      // which will write it to the file we defined above
      {
        test: /\.scss$/,
        loaders: [
          'css-loader',
          'sass-loader',
        ]
      },
    ]
  }
};
