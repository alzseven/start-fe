const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/todos.js',
  output: {
    filename: 'app.js',
    path: `${__dirname}/dist`,
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
