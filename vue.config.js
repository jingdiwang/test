const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  devServer: {
    client: {
      webSocketURL: 'ws://0.0.0.0:8080/ws',
    },
    proxy: {
      '/api': {
        target: "http://backend-api-01.newbee.ltd/",   // 实际跨域请求的API地址
        secure: false,   // https请求则使用true
        ws: true,
        changeOrigin: true,
      }
    }
  }

})
