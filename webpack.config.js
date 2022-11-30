const path = require('path');
var BrotliPlugin = require('brotli-webpack-plugin');
let sassImplementation;
try {
  // tslint:disable-next-line:no-implicit-dependencies
  sassImplementation = require('node-sass');
} catch {
  sassImplementation = require('sass');
}

module.exports = {
  // Fix for: https://github.com/recharts/recharts/issues/1463
  plugins:[
    new BrotliPlugin({
      asset:'[path].br',
      threshold:0,
      minRatio:0.8
    })
  ],
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: sassImplementation,
              sourceMap: false,
              sassOptions: {
                precision: 8
              }
            }
          }
        ]
      }
    ]
  }
};
