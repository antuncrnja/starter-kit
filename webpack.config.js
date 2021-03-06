const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	//mode: 'production',
	watch: true,
	entry: './app/js/app.js',
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, 'build')
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'bundle.css'
		})
	],
	module: {
		rules: [
			{
				test: /\.scss$/,	
				exclude: /(node_modules|bower_components)/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader', 
					'sass-loader',
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [
									["autoprefixer"],
								],
							},
						},
					},
				]
			},
		  {
			test: /\.m?js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
			  loader: 'babel-loader',
			  options: {
				presets: ['@babel/preset-env']
			  }
			}
		  }
		]
	  }
}