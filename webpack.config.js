/* webpack.config.js
* Webpack Configuration JS file 
*/
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


const appVersionNumber = require('./package.json'),
  NODE_APP_ENV = process.env.NODE_APP_ENV || 'local',
  DEBUG = NODE_APP_ENV === 'local' ? true : false;

module.exports = {
	devtool : 'cheap-module-source-map', // Note: original source (lines only) and can be used for production
	//devtool : 'cheap-eval-source-map',  //Note: transformed code (lines only) and cannot be used for production
	entry : {	main : './src/index.js'},
	output : {
		path : path.resolve(__dirname, 'dist'),
		filename :'[name].[chunkhash].js'
	},
	module : {
		rules : [
			{
				test : /\.(js|jsx)$/,
				exclude : /node_modules/,
				use : {
					loader : 'babel-loader'
				}
			},
			{
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
          }
        ]
      },
      {
			  test: /\.(eot|woff|woff2|ttf|svg)$/,
			  use: [
				  {
				    loader: "url-loader",
				    options: {
				      name: "fonts/[name].[ext]",
				    }
				  }
			  ]
			},
			{
				test : /\.scss$/,
				use: [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
			},
		]
	},
	plugins : [
		new CleanWebpackPlugin( 'dist', {} ),
		new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
		new HtmlWebpackPlugin(
			{
				inject : false,
				hash : true,
				template : './src/index.html',
				filename : 'index.html'
			}
		),
		new CopyWebpackPlugin(
		[
	      { from : 'src/images', to : 'images' },
	      { from : 'src/styles/fonts', to : 'fonts' }
	    ], { ignore : ['*.scss'] }
    ),
		new WebpackMd5Hash(),
		new webpack.DefinePlugin({
      __DEVELOPMENT__ : JSON.stringify(DEBUG),
      'process.env.NODE_APP_ENV' : JSON.stringify(NODE_APP_ENV),
      'process.env.NODE_ENV' : JSON.stringify(DEBUG ? 'development' : 'production'),
      'process.env.APP_VERSION' : JSON.stringify(appVersionNumber.version)
    })
	],
	devServer: {
		port: 8080,
	  historyApiFallback: true
	}
};

