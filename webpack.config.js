var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname, "client/dist");
var APP_DIR = path.resolve(__dirname, "client/src");

var config = {
  entry: APP_DIR + "/main.jsx",
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react", "stage-0"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    publicPath: "/client/dist/",
    filename: "bundle.js"
  },
  devServer: {
    host: "localhost",
    port: 8001,
    disableHostCheck: true
  }
};

module.exports = config;
