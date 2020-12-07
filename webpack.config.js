const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");
module.exports = {
  mode: "development",
  entry: ["./index.js", path.resolve(__dirname, "assets/css/main.scss")],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    chunkLoading: false,
    wasmLoading: false
  },

  plugins: [
    new MiniCssExtractPlugin()
    // , new StylelintPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  devtool: "source-map"
};
