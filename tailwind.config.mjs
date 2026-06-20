/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        normal: ["system-ui", "sans-serif"],
        mono: [
          "ui-monospace",
          "Roboto",
          "Cascadia Code",
          "Source Code Pro",
          "Menlo",
          "Consolas",
          "DejaVu Sans Mono",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
