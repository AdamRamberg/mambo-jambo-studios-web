const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const plugins = [
  new HtmlWebPackPlugin({
    inject: true,
    template: path.join(process.cwd(), 'src/index.html'),
  }),
  new WebpackPwaManifest({
    name: 'Mambo Jambo Studios',
    short_name: 'MJS',
    description: 'Mambo Jambo Studios webpage',
    background_color: '#fafafa',
    theme_color: '#fafafa',
    icons: [
      {
        src: path.resolve('src/images/mjs-logo-black-512x512.png'),
        sizes: [72, 96, 120, 128, 144, 152, 167, 180, 192, 384, 512],
      },
    ],
  }),
  new FaviconsWebpackPlugin(
    path.join(process.cwd(), 'src/images/mjs-logo-black-512x512.png'),
  ),
];

module.exports = options => ({
  mode: options.mode,
  entry: [path.join(process.cwd(), 'src/index.js')],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  devServer: options.devServer,
  plugins: options.plugins.concat(plugins),
});
