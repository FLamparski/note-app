import path from 'path';

import autoprefixer from 'autoprefixer';

import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';


export default env => ({
  context: path.resolve(__dirname, 'src/'),
  entry: path.resolve(__dirname, 'src', 'index.js'),

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/', // change to relevant path for gh-pages
    filename: 'main.js'
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json', '.less'],
    modules: [
      path.resolve(__dirname, "src/lib"),
      path.resolve(__dirname, "node_modules"),
      'node_modules'
    ],
    alias: {
      components: path.resolve(__dirname, "src/components"),
      styles: path.resolve(__dirname, "src/styles"),
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.less$/,
        include: path.resolve(__dirname, 'src'),
        use: ExtractTextPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: {
              singleton: true
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
            'postcss-loader',
            {
              loader: 'less-loader',
              options: {
                sourceMap: process.env.NODE_ENV === 'production'
              }
            }
          ]
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', './index.ejs'),
			minify: { collapseWhitespace: true }
		})
  ]
});
