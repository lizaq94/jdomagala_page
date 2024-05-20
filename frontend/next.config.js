/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
		prependData: `@import "@styles/base/main.scss";`,
	},
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'eu-central-1-shared-euc1-02.graphassets.com',
			},
		],
	},
};

module.exports = nextConfig;
