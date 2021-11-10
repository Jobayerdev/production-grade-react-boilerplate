const path = require('path')
const CracoLessPlugin = require('craco-less')

module.exports = {
	style: {
		postcss: {
			plugins: [require('tailwindcss'), require('autoprefixer')],
		},
	},
	webpack: {
		alias: {
			'@shared': path.resolve(__dirname, './src/@shared'),
			'@modules': path.resolve(__dirname, './src/@modules'),
		},
	},
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: { '@primary-color': 'red' },
						javascriptEnabled: true,
					},
				},
			},
		},
	],
}
