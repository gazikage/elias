/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            slide: {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(-50%)' }
            }
        },
        animation: {
            'slide': 'slide 20s linear infinite'
        }
    },
    plugins: [],

}