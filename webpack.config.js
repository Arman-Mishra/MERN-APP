const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, `src`, `app`),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/", //path where our code expects to find the bundle.js
  },
  resolve: {
    extensions: [".js", ".jsx"], //to process the type of extensions
  },
  devServer: {
    historyApiFallback: true, //for react-router to work
  },
  module: {
    rules: [
      {
        test: /\.jsx?/, //regex the application is going to use if a file should be compiled or not
        loader: "babel-loader",
      },
    ],
  },
};
