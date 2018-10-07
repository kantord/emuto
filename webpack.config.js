var DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'emuto.js',
    library: 'emuto',
    libraryTarget: 'umd',
  },
  externals: /buffer/,
  plugins: [
    new DuplicatePackageCheckerPlugin({
      verbose: true,
      emitError: true,
      showHelp: true,
      strict: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
