'use strict';

const path = require('path');

module.exports = {
	entry: './js/app.js',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},
	context: __dirname,
	devtool: 'source-map',
	module: {
		loaders: [{
			test: /jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: [
					'react',
					['env', {
						targets: {
							browsers: ['last 2 versions']
						}
					}]
				]
			}
		}]
	}
};
