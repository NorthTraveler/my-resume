const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 入口文件
  mode: 'development',
  entry: './app/layout.tsx',
  // 输出文件
  output: {
    filename: 'bundle.js', // 打包后的文件名
    path: path.resolve(__dirname, 'dist'), // 打包后的文件存放路径
  },
  // 模块加载器
  module: {
    rules: [
      {
        test: /\.js$/, // 匹配 JavaScript 文件
        exclude: /node_modules/, // 排除 node_modules 目录
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // 配置 Babel 预设
          },
        },
      },
      {
        test:/.(ts|tsx)$/,//匹配ts、tsx文件
        use:{
            loader:"babel-loader",
            options:{
                //预设执行顺序由右往左，所以这里是先处理ts再处理jsx
                presets:[
                    "@babel/preset-react",
                    "@babel/preset-typescript"
                ]
            }
        }
    },
      {
        test: /\.css$/, // 匹配 CSS 文件
        use: ['style-loader', 'css-loader'], // 使用 style-loader 和 css-loader 加载 CSS 文件
      },
    ],
  },
  // 插件
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './app/index.html', // 指定模板文件
//       filename: 'index.html', // 打包后的文件名
//     }),
//   ],
  // 开发服务器
  devServer: {
    contentBase: './dist', // 设置开发服务器的根目录
    open: true, // 自动打开浏览器
  },
};