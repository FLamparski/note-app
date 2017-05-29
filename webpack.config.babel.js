import path from 'path';

import {NamedModulesPlugin} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const appStyles = new ExtractTextPlugin('style.css');
const frameworkStyles = new ExtractTextPlugin('framework.css');

export default {
	context: path.resolve(__dirname, 'src/'),
	entry: path.resolve(__dirname, 'src', 'index.js'),

	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/', // Change to relevant path for gh-pages
		filename: 'main_[hash].js'
	},

	devtool: process.env.NODE_ENV === 'development' && 'source-map',

	resolve: {
		extensions: ['.jsx', '.js', '.json', '.less'],
		modules: [
			path.resolve(__dirname, 'src/lib'),
			path.resolve(__dirname, 'node_modules'),
			'node_modules'
		],
		alias: {
			components: path.resolve(__dirname, 'src', 'components'),
			styles: path.resolve(__dirname, 'src', 'styles'),
			actions: path.resolve(__dirname, 'src', 'actions'),
			react: 'preact-compat',
			'react-dom': 'preact-compat'
		}
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						sourceMap: process.env.NODE_ENV === 'development'
					}
				}
			},
			{
				test: /\.less$/,
				include: path.resolve(__dirname, 'src'),
				use: appStyles.extract({
					fallback: {
						loader: 'style-loader',
						options: {
							singleton: true,
							sourceMap: process.env.NODE_ENV === 'development'
						}
					},
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: process.env.NODE_ENV === 'production',
								modules: true,
								importLoaders: 1,
								localIdentName: '[local]___[hash:base64:10]'
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: process.env.NODE_ENV === 'development'
							}
						},
						{
							loader: 'less-loader',
							options: {
								sourceMap: process.env.NODE_ENV === 'development'
							}
						}
					]
				})
			},
			{
				test: /\.css$/,
				include: /node_modules\/react-toolbox/,
				use: frameworkStyles.extract({
					fallback: {
						loader: 'style-loader',
						options: {
							singleton: true,
							sourceMap: process.env.NODE_ENV === 'development'
						}
					},
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: process.env.NODE_ENV === 'development',
								modules: true,
								importLoaders: 1,
								localIdentName: 'toolbox--[local]___[hash:base64:10]'
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: process.env.NODE_ENV === 'development'
							}
						}
					]
				})
			},
			{
				test: /\.svg$/,
				include: /material-design-icons/,
				loader: 'svg-sprite-loader'
			}
		]
	},

	plugins: [
		appStyles,
		frameworkStyles,
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', './index.ejs'),
			minify: {collapseWhitespace: true}
		}),
		new NamedModulesPlugin()
	]
};
