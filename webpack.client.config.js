// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');

// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //  -> ADDED IN THIS STEP

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'public'),
  SRC: path.resolve(__dirname, 'client/src'),
  JS: path.resolve(__dirname, 'client/src/js'),
};

// Webpack configuration
const client = {
  entry: path.join(paths.SRC, 'client.js'),
  output: {
    path: paths.DIST,
    filename: 'app-description.bundle.js',
  },
  // Tell webpack to use html plugin
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: path.join(paths.SRC, 'index.html'),
  //   }),
  //   new ExtractTextPlugin('style.bundle.css'), // CSS will be extracted to this bundle file -> ADDED IN THIS STEP
  // ],
  // Loaders configuration
  // We are telling webpack to use "babel-loader" for .js and .jsx files
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      // CSS loader for CSS files
      // Files will get handled by css loader and then passed to the extract text plugin
      // which will write it to the file we defined above
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      // File loader for image assets -> ADDED IN THIS STEP
      // We'll add only image extensions, but you can add things like svgs, fonts and videos
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  // Enable importing JS files without specifying their's extension
  //
  // So we can write:
  // import MyComponent from './my-component';
  //
  // Instead of:
  // import MyComponent from './my-component.jsx';
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

const server = {
  entry: path.join(paths.SRC, 'server.js'),
  target: 'node',
  output: {
    libraryTarget: 'commonjs-module',
    path: paths.DIST,
    filename: 'app-description.bundle-server.js'
  },
  // Tell webpack to use html plugin
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: path.join(paths.SRC, 'index.html'),
  //   }),
  //   new ExtractTextPlugin('style.bundle.css'), // CSS will be extracted to this bundle file -> ADDED IN THIS STEP
  // ],
  // Loaders configuration
  // We are telling webpack to use "babel-loader" for .js and .jsx files
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      // CSS loader for CSS files
      // Files will get handled by css loader and then passed to the extract text plugin
      // which will write it to the file we defined above
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      // File loader for image assets -> ADDED IN THIS STEP
      // We'll add only image extensions, but you can add things like svgs, fonts and videos
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  // Enable importing JS files without specifying their's extension
  //
  // So we can write:
  // import MyComponent from './my-component';
  //
  // Instead of:
  // import MyComponent from './my-component.jsx';
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = [
  client,
  server
]
