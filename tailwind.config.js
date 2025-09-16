// tailwind.config.js
module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#4F46E5",  // example
                secondary: "#6B7280",
            },
            spacing: {
                72: "18rem",
                84: "21rem",
                96: "24rem",
            },
            fontFamily: {
                heading: ["Inter", "sans-serif"],
                body: ["Roboto", "sans-serif"],
            }
        },
    },
    plugins: [],
};
