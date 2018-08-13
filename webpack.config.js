const path = require('path')
const UglifyPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const srcPath = path.resolve(__dirname, 'src')

module.exports = {
  entry: {
    entry: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'rxjs-tutorial.min.js',
    libraryTarget: 'umd',
    library: 'rxjs-tutorial'
  },
  module: {
    rules: [{
      test: /\.js?/,
      include: [
        srcPath
      ],
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env'
          ],
          plugins: [
            require('@babel/plugin-proposal-object-rest-spread'),
            require('@babel/plugin-proposal-class-properties')
          ]
        }
      }
    }]
  },
  devtool: 'source-map',
  // 代码模块解析路径配置
  resolve: {
    modules: [
      'node_modules',
      srcPath
    ],
    extensions: ['.js']
  },
  plugins: [
    new UglifyPlugin(),
    new BundleAnalyzerPlugin()
  ]
}
