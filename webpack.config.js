var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve('js'),
  entry: ["./utils.js","./app.js"],
	output: {
    path: path.resolve('build/js/'),
    publicPath: '/public/assets/js/',
    filename: 'bundle.js'
	},
  plugins: [
    new ExtractTextPlugin("styles.css")
  ],
  devServer: {
    contentBase: 'public'
  },
	module: {
		loaders: [
      {
        test: /\.(es6|js)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
  			test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract( "style-loader", "css-loader")
      }
    ]
	},
  resolve: {
    extensions: ['', '.js', '.es6']
  }
}
