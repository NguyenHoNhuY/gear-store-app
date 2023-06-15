/** @type {import('tailwindcss').Config} */
module.exports = {
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
                "gray-color": "#454545",
                "gray-background": "#f1f0f1",
                "main-color": "#FF6000",
                "main-color-100": "#D63D00",
                "main-color-200": "#AF1100",
                "main-color-300": "#8A0000",
                "base-color": "#111111",
            },
        },
    },
    plugins: [],
};
