/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        page: "var(--color-page)",
        section: "var(--color-section)",
        card: "var(--color-card)",
        "card-muted": "var(--color-card-muted)",
        "card-hover": "var(--color-card-hover)",
        border: "var(--color-border)",
        text: "var(--color-text)",
        muted: "var(--color-text-muted)",
        button: "var(--color-button)",
        "button-hover": "var(--color-button-hover)",
      },
    },
  },
  plugins: [],
};
