const path = require('path')

module.exports = {
	mode: 'production',
	watch: true,
	entry: './app/js/app.js',
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /\.scss$/,	
				exclude: /(node_modules|bower_components)/,
				use: [
					'style-loader', 
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