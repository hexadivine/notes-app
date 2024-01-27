/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        colors: {
            'dark-blue' : '#1a1f29',
            'light-blue' : '#1f2430',
            'transparent' : 'rgba(255, 255, 255, 0.1)'
        }
    },
    plugins: [],
};
