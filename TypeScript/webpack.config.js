const path = require('path')

module.exports = {
  mode: 'production',

  devtool: 'source-map', // to better debug on browser

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
        include: [path.resolve(__dirname, 'src')]
      },
    ],
  },

  resolve: {
    // specify estensions for imports
    extensions: ['.ts', '.js',]
  },
}