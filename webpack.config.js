const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  console.log( 'Goal: ', env.goal)
  console.log( 'production: ', env.production);
  return {
	  entry: './src/index.js',
	  output: {
	    filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	  }
  }
};
