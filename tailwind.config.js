/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			// Primary
			NeonGreen: "hsl(150, 100%, 66%)",
			LightCyan: "hsl(193, 38%, 86%)",
			// Neutral
			GrayishBlue: "hsl(217, 19%, 38%)",
			DarkGrayishBlue: "hsl(217, 19%, 24%)",
			DarkBlue: "hsl(218, 23%, 16%)",
		},
		extend: {},
	},
	plugins: [],
};
