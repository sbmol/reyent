const { defineConfig } = require("@vue/cli-service");
const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Cambia esto con la URL de tu backend de Rails
        changeOrigin: true,
        pathRewrite: {
          '^/api': '', // Elimina '/api' de la ruta en la solicitud al backend
        },
      },
    },
  },
});
