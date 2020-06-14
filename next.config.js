const withOptimizedImages = require("next-optimized-images");
const withCSS = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(mov|mp4|webm)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: `/_next/public/files`,
            outputPath: `public/files`
          },
        },
      ],
    })
  
    return config;
  },
};

module.exports = withPlugins([withOptimizedImages, withCSS], nextConfig);
