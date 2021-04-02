const path = require("path");
module.exports = {
  // devServer: {
  //   https: true
  // },
  pages: {
    index: {
      entry: "src/main.ts",
      title: "sisUsers",
    },
  },

  publicPath: "",
  outputDir: "build",
  chainWebpack: (config) => {
    config.resolve.alias.set(
      "@componentes",
      path.resolve(__dirname, "src/components")
    );
    config.resolve.alias.set("@public", path.resolve(__dirname, "public"));
    config.resolve.alias.set("@views", path.resolve(__dirname, "src/views"));
    config.resolve.alias.set(
      "@plugins",
      path.resolve(__dirname, "src/plugins")
    );
    config.resolve.alias.set(
      "@config",
      path.resolve(__dirname, "src/configuration")
    );
    config.resolve.alias.set("@models", path.resolve(__dirname, "src/models"));
    config.resolve.alias.set("@utils", path.resolve(__dirname, "src/utils"));
  },
};
