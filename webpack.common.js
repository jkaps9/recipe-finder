const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    homepage: "./src/index.js",
    recipepage: "./src/Recipe.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "src/pages/about.html",
    }),
    new HtmlWebpackPlugin({
      filename: "recipes.html",
      template: "src/pages/recipes.html",
    }),
    new HtmlWebpackPlugin({
      filename: "recipe.html",
      template: "src/pages/recipe.html",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    port: 8080,
  },
};
