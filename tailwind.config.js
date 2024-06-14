/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    mytheme: {
      "primary": "#5f00ff",
      "primary-content": "#d8daff",
      "secondary": "#d50000",
      "secondary-content": "#fed7d0",
      "accent": "#00e400",
      "accent-content": "#001200",
      "neutral": "#0e172f",
      "neutral-content": "#c8cbd2",
      "base-100": "#26292e",
      "base-200": "#202227",
      "base-300": "#191c1f",
      "base-content": "#cfd0d1",
      "info": "#00f5ff",
      "info-content": "#001516",
      "success": "#009c00",
      "success-content": "#000900",
      "warning": "#ffa200",
      "warning-content": "#160a00",
      "error": "#ff5484",
      "error-content": "#160206",
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

