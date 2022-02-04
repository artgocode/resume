const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            screens: {
                'xs': '420px',
                ...defaultTheme.screens,
              },
        },
    },
    plugins: [],
}
