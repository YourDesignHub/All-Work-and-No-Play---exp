var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');

var isDev = global._isDev;

module.exports = {
  //devtool: 'cheap-module-eval-source-map',
  entry: {
    'resources/index' : entryFile('./app/resources/build/index.js'),
    vendor : ["react","react-dom"]
  },
  resolve: {
    root : [
      path.join(__dirname, 'libs')
    ]
  },
  output: {
    path: path.join(__dirname, 'public/bundles'),
    filename: '[name].bundle.js',
    publicPath: '/bundles/'
  },
  plugins: mergeMiddleware(
    isDev ? [new webpack.HotModuleReplacementPlugin()] : [],
		[
      new webpack.optimize.CommonsChunkPlugin({name:'vendor',filename:"vendor.bundle.js"})
    ]
  ),
  module: {
    loaders: [
       { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      {
        include: [
          path.join(__dirname, 'app'),
          path.join(__dirname, 'libs'),
          path.join(__dirname, 'images')
        ],
        loaders: [
          'style-loader',
          'css-loader?url=false&importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
        ],
        test: /\.css$/
      },
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: [
          path.join(__dirname, 'app'),
          path.join(__dirname, 'libs'),
          path.join(__dirname, 'images')
        ]
      }
    ]
  }
};
//HELPER FUNCTIONS
function entryFile( src ){
  return mergeMiddleware(
    global._isDev ? ['webpack-hot-middleware/client'] : [], 
    arguments
  )
}

function mergeMiddleware(){
  return _.union.apply( _, arguments );
}