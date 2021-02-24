require('dotenv').config();

module.exports = {
  hot: true,
  contentBase: 'assets',
  publicPath: 'build',
  historyApiFallback: '__app.html',
  port: process.env.PORT || 5000,
  verbose: true,
  proxy: {
    '/api': {
      host: "http://localhost:5000",
      changeOrigin: true,
      proxyReqPathResolver: function (req) {
        return req.url.replace("api/", "")
      }
    }
  }
}
