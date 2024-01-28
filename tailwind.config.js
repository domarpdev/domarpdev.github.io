/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {

            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },

            colors: {
                "primary-color": "#274bc8",
                "taskbar-item-hover-color": "#363636",
                "windows-popup-color": "#242424",
                "windows-popup-bottom-color": "#1C1C1C",
                "menu-button-hover-color": "#D0D2D5",
                "defaul-app-bg-color": "#F3F3F3"
            }
        },

        minWidth: {
            '400': '400px',
        },

        minHeight: {
            '360': '360px',
        },
    },
    plugins: [],
}