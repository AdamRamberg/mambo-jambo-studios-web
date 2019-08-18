const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const plugins = [
  new HtmlWebPackPlugin({
    inject: true,
    template: path.join(process.cwd(), 'src/index.html'),
  }),
  new CopyWebpackPlugin([
    {
      from: path.resolve(process.cwd(), 'static'),
    },
  ]),
];

module.exports = options => ({
  mode: options.mode,
  entry: [
    path.join(process.cwd(), 'src/i18n/appInit.js'),
    path.join(process.cwd(), 'src/index.js'),
  ],
  output: {
    publicPath: '',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js',
  },
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
      {
        test: /\.(eot|ttf|woff|woff2|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
    ],
  },
  devServer: options.devServer,
  plugins: options.plugins.concat(plugins),
});
