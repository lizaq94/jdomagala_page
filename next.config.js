/** @type {import('next').NextConfig} */

const nextConfig = {
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
