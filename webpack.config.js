const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path")
const isProd = process.env.NODE_env === "production"
const isDev = !isProd
console.log("isProd =", isProd)
console.log("isDev =", isDev)

const jsLoaders = () => {
  const loaders = [
    {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: ["@babel/plugin-proposal-class-properties"]
      }
    }
  ]
  if (isDev) {
    loaders.push("eslint-loader")
  }
  return loaders
}

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: "./index.js",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".js"],
    alias: {
      // import ../../../core/components
      // import @core/components
      "@": path.resolve(__dirname, "src"),
      "@core": path.resolve(__dirname, "src/core")
    }
  },
  devtool: isDev ? "source-map" : false,
  devServer: {
    port: 9000,
    hot: isDev
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd
      }
    }),
    new CopyPlugin({
      patterns: [
        {from: path.resolve(__dirname, "src/favicon.ico"),
          to: path.resolve(__dirname, "dist")},
      ],
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "bundle.[hash].css"
    }),
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
          "sass-loader",
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: jsLoaders()
      }
    ],
  }
}
