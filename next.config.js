const withOptimizedImages = require("next-optimized-images");
const withCSS = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");


module.exports = withPlugins([withOptimizedImages, withCSS]);