const webpack = require('webpack');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
];

module.exports = require('./webpack.base')({
  mode: 'development',
  plugins,
  devServer: {
    hot: true,
    inline: true,
  },
});