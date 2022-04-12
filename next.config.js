/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		NEXT_PUBLIC_API: "https://pokeapi.co/api/v2/",
	},
};

module.exports = nextConfig;
