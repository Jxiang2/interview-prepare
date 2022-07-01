const path = require('path')

const MODE = 'production'

module.exports = {
  mode: MODE || 'development',

  devtool: MODE === 'production' ? 'source-map' : 'eval-source-map', // to better debug on browser

  entry: './src/summary.ts', //relative path of entry file; all other paths in this file will be absolute

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    // each obj in rules arr is a rule
    rules: [
      {
        // if a file in src folder is ending with .ts, using ts-loader on it
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')],
      },
    ],
  },

  resolve: {
    // specify estensions for imports
    extensions: ['.ts', '.js',],
  },

  devServer: { // development hot-reload mode
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    compress: true,
    port: 9000,
  }
}