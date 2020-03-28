/* eslint-disable */
const {
  override,
  addDecoratorsLegacy,
  useEslintRc,
  addPostcssPlugins
} = require('customize-cra');
const stylelint = require('stylelint');

module.exports = override(
  addDecoratorsLegacy(),
  addPostcssPlugins([
    stylelint('./.styelintrc'),
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-mixins'),
    require('postcss-nested'),
    require('postcss-extend'),
    require('autoprefixer')
  ])
);
