const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/assets/js/app.js',
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'public/js'),
  },
  module: {
    rules:[
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.js$/,
        use:[
          {
            loader:"babel-loader",
            options:{
              presets:[
                ['es2015']
              ]
            }
          }
        ]
      }
    ],
  }
}
