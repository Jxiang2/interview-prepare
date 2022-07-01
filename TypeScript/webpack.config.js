const path = require('path')

module.exports = {
  mode: 'development',

  entry: './src/summary.ts', //relative path of entry file; all other paths in this file will be absolute

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

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),

  },

  devServer: {
    open: 'http://localhost:3000',
    port: 3000,
    static: {
      // specify which directory to serve
      directory: path.resolve(__dirname, 'dist')
    }
  }
}