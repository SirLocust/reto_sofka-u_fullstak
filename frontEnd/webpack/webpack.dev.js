const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    open: true,
    static: {
      directory: path.resolve(__dirname, '..', './src/assets'),
      publicPath: '/',
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Vishwas'),
    }),
  ],
}
