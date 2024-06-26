const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:'./src/index.tsx',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
          '@': path.resolve(__dirname, 'src'),
        },
      },
  output: {
    path: path.join(__dirname, "/dist"), // the bundle output path
    filename: "bundle.js", // the name of the bundle
    publicPath:"/",
   
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      publicPath:"/",// to import index.html file inside index.js
    }),
  ],
  devServer: {
    port: 3030,

   
    historyApiFallback: true, // you can change the port
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "ts-loader",
        },
      },
      
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: "url-loader",
        options: { limit: false },
      },
    ],
  },
};