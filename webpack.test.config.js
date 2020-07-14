// const { VueLoaderPlugin } = require("vue-loader"); // vue-loader
const path = require("path");
const webpack = require("webpack");

module.exports = {
  devtool: '#inline-source-map',
  mode: 'none',
  resolve: {
    extensions: ['.js', '.json'],
    alias:{
      "@": path.resolve(__dirname,'../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      // {
      //   test: /\.vue$/,
      //   exclude: /node_modules/,
      //   loader: "vue-loader"
      // },
      // {
      //   test: /\.scss/,
      //   exclude: /node_modules/,
      //   // 将样式抽取出来为独立的文件 minicss-extractPlugin 不能和style-loader 一起用会报错
      //   use: ["style-loader", "css-loader", "sass-loader"]
      //   //  exclude: /node_modules/
      // },
      // {
      //   test: /\.less/,
      //   exclude: /node_modules/,
      //   // 将样式抽取出来为独立的文件 minicss-extractPlugin 不能和style-loader 一起用会报错
      //   use: ["style-loader", "css-loader", "less-loader"]
      //   //  exclude: /node_modules/
      // },
      // {
      //   test: /\.css/,
      //   exclude: /node_modules/, //过滤
      //   use: ["style-loader", "css-loader"]
      // },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   exclude: /node_modules/,
      //   use: ["url-loader"]
      // },
      // {
      //   test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      //   exclude: /node_modules/,
      //   loader: "file-loader",
      //   options: {
      //     limit: 10000,
      //     name: "fonts/[name].[hash:7].[ext]"
      //   }
      // }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      //环境变量
      "process.env": {
        NODE_ENV: "'test'",
      }
    }),
  ]
};
