module.exports = {
    publicPath: "./",
    transpileDependencies: ["vuetify"],
    pluginOptions: {
      configureWebpack: {
        optimization: {
          splitChunks: {
            minSize: 10000,
            maxSize: 250000
          }
        }
      }
    }
}