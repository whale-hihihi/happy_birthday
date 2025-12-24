module.exports = {
  context: __dirname,
  entry: './script/main.js',
  devServer: {
    port: 1113,
    open: true,
    hot: true,
    static: {
      directory: './'
    }
  },
  output: {
    clean: true,
    path: __dirname + '/dist',
    publicPath: './'
  },
  builtins: {
    html: [{
      template: './index.html',
      inject: true
    }]
  }
}
