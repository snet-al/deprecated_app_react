/* eslint-disable */
const tailwind = require('tailwindcss');

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-mixins'),
    require('postcss-nested'),
    tailwind('./tailwind.config.js'),
    require('postcss-extend'),
    require('autoprefixer')
  ]
};
