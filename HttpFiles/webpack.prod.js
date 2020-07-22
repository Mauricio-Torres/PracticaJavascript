const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");

// npm i -D mini-css-extract-plugin -- coloca archivos css de forma global
// npm i -D optimize-css-assets-webpack-plugin -- miniminaliza los css les quita los comentarios y espacios hace el archivo mas pequeno
// npm i -D html-loader html-webpack-plugin
// npm i -D file-loader  -- para manejar imagenesy archivos
// npm i copy-webpack-plugin --save-dev   -- sirve para copiar los archivos de forma estatica no modifican nada
// npm i -D webpack-dev-server  -- permite que la aplicacion se auto recargue automaticamente se crea un servidor para que el archivo siga corriendo
// funciona igual q la aplicacion de angular
// npm i -D css-loader style-loader -- carga los archivos css a la carpeta dist (carpeta final del proyecto)

// la importacion de los archivos css se realiza solo sirve para archivos locales de cada js no global=>
// {  test: /\.css$/, use: ["style-loader", "css-loader"],  }

module.exports = {
  mode: "production",
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin()],
  },
  output: {
    filename: "main.[contentHash].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        exclude: /styles\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /styles\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          attributes: false,
          minimize: true,
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: { seModule: false },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contentHash].css",
      ignoreOrder: false,
    }),
    new MinifyPlugin(),
    new CleanWebpackPlugin(),
    new CopyPlugin({ patterns: [{ from: "src/assets", to: "assets/" }] }),
  ],
};
