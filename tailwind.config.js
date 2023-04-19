const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
        colors: {
            ...colors,
            accent: colors.violet,
            primary: colors.gray,
            secondary: colors.gray,
            success: colors.green,
            danger: colors.red,
            warning: colors.yellow,
            neutral: colors.gray,
        }
    },

    plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')],
};
