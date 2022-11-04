/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
		fontFamily: {
			IBM: "'IBM Plex Sans', sans-serif",
		},
		colors: {
			primary: 'rgb(var(--color-primary))',
		},
	},
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
