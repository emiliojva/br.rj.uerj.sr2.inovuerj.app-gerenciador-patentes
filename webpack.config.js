const path = require('path');
// const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require( 'fork-ts-checker-webpack-plugin' );
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // entry: './src/index.js',
  mode: 'development', // or 'production',

  entry: './resources/index.js',

  devtool: 'inline-source-map',

  output: {
    // filename: 'main.js',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/dist'),
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      }
    ]
  },
  
  // plugins
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new ForkTsCheckerWebpackPlugin(), // run TSC on a separate thread
    
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   // 'window.jQuery': 'jquery'
    // })
  ],

  // set watch mode to `true`
  watch: true,

  // performance: {
  //   hints: "warning"
  // },
  
}