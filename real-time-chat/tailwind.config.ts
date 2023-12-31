import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				bg1: "#FFF2E9",
				clr1: "#1E1F30",
				clr1_gredient: "rgba(30,31,48,0.59)",
				clr2: "#F0823F",
				clr2_light:"#F8BD9A",
				white: "#fff",
				transparent: "transparent",
			},
		},
	},
	plugins: [],
	corePlugins: {
		preflight: false,
	},
};
export default config
