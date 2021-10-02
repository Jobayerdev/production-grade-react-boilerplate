const path = require("path")

module.exports = {
	style: {
		postcss: {
			plugins: [require("tailwindcss"), require("autoprefixer")],
		},
	},
	webpack: {
		alias: {
			"@shared": path.resolve(__dirname, "./src/@shared"),
			"@modules": path.resolve(__dirname, "./src/@modules"),
		},
	},
}
