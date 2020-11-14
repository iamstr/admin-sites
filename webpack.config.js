const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./index.js",
  output: {
    // eslint-disable-next-line quotes
    filename: "bundle.js",
    path: path.resolve(__dirname)
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "My App",
      body: "",
      filename: "index.html",
      cache: true
    }),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      }
    ]
  }
};
