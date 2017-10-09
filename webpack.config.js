let webpack = require('webpack'),
	path = require('path'),
	env = process.env.NODE_ENV,
	htmlPlugin = require('html-webpack-plugin'),
	ExtarctTextPlugin = extarctTextPlugin = require('extract-text-webpack-plugin'),
	autoPrefixer = require('autoprefixer');

let postcssConfig = {
	loader: 'postcss-loader',
	options: {
        plugins: [
            autoPrefixer({
                browserslist:['ios >= 7', 'Android>=4.4', "> 1%", "last 2 versions"]
            })
        ]
    }
};

let commonConfig = {
	entry: {
		index: path.resolve(__dirname + '/src/js/index.js')
	},
	output: {
		path: path.resolve(__dirname + '/'),
		publicPath: '/',
		filename: '[name].js',
		chunkFilename: './js/[name].js'
	},
	/*externals:{
		'vue': 'vue',
		'axios': 'axios',
		'vueRouter': 'VueRouter'
	},*/
	resolve:{
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue': 'vue/dist/vue.esm.js',
			'@': path.resolve('src'),
			'src': path.resolve('src'),
			'components':  path.resolve('src/components')
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders:{
						scss: 'vue-style-loader!css-loader!sass-loader',
						sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
					},
					extractCSS: true
					/*loaders: {
						css: extarctTextPlugin.extract({
							fallback: 'style-loader',
							use: [
							    'css-loader',
		                        {
		                            loader: 'postcss-loader',
		                            options: {
		                                plugins: [
		                                    autoPrefixer({
		                                        browserslist:['ios >= 7', 'Android>=4.4', "> 1%", "last 5 versions"]
		                                    })
		                                ]
		                            }
		                        },
		                        'sass-loader']
						})
						//postcss: [require('autoprefixer')({ browsers: ['ios >= 7', 'Android>=4.4', "> 1%", "last 2 versions"] })]
					}*/
				}
				/*options: {
					loaders: {
						css: extarctTextPlugin.extract({
							use: ['css-loader','sass-loader', postcssConfig],
							fallback: 'vue-style-loader'
						})
						'scss': 'style-loader!css-loader!sass-loader',
						'sass': 'style-loader!css-loader!sass-loader?indentedSyntax',
						'less': 'style-loader!css-loader!postcss-loader!less-loader'
					}
				}*/
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(css|scss|sass|less)$/,
				use: extarctTextPlugin.extract({
					fallback: 'style-loader',
					use: [
					    'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    autoPrefixer({
                                        browserslist:['ios >= 7', 'Android>=4.4', "last 5 versions"]
                                    })
                                ]
                            }
                        },
                        'sass-loader']
				})
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'url-loader?limit=3072&name=./images/[name].[ext]',
				options: {
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	/*devServer: {
		historyApiFallback: true,
		noInfo: true,
		disableHostCheck: true
	},*/
	plugins: [
		new htmlPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new webpack.LoaderOptionsPlugin({
			options:{
                babel: {
                    "presets": ["es2015"],
                    "plugins": ["transform-runtime"],
                    "comments": false
                }
			}
		}),
		new extarctTextPlugin('[name].[hash:4].css')
	]
}

module.exports = commonConfig