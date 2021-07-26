const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/demo/index.tsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "demo-dist"),
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          configFile: "tsconfig.demo.json",
        },
      },
    ],
  },
};
