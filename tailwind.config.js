/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
	theme: {
		mytheme: {
			primary: "#5f00ff",
			"primary-content": "#d8daff",
			secondary: "#d50000",
			"secondary-content": "#fed7d0",
			accent: "#00e400",
			"accent-content": "#001200",
			neutral: "#0e172f",
			"neutral-content": "#c8cbd2",
			"base-100": "#26292e",
			"base-200": "#202227",
			"base-300": "#191c1f",
			"base-content": "#cfd0d1",
			info: "#00f5ff",
			"info-content": "#001516",
			success: "#009c00",
			"success-content": "#000900",
			warning: "#ffa200",
			"warning-content": "#160a00",
			error: "#ff5484",
			"error-content": "#160206",
		},
		extend: {
			animation: {
				marquee: "marquee 5s linear infinite",
				marquee2: "marquee2 5s linear infinite",
				reverse_marquee: "reverse_marquee 5s linear infinite",
				reverse_marquee2: "reverse_marquee2 5s linear infinite",
			},
			keyframes: {
				marquee: {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-100%)" },
				},
				marquee2: {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0%)" },
				},
				reverse_marquee: {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(100%)" },
				},
				reverse_marquee2: {
					"0%": { transform: "translateX(-100%)" },
					"100%": { transform: "translateX(0%)" },
				},
			},
		},
	},
	plugins: [require("daisyui")],
};
