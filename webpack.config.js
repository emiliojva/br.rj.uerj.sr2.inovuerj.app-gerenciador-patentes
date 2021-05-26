const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require( 'fork-ts-checker-webpack-plugin' );

module.exports = {
  // entry: './src/index.js',
  mode: 'development', // or 'production',

  entry: './resources/typescript/main.ts',

  devtool: 'inline-source-map',

  output: {
    // filename: 'main.js',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js/dist'),
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
  },

  module: {
    rules: [
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
      },
      // {
      //   test: /\.css$/i,
      //   use: ['style-loader','css-loader']
      // },
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   type: 'asset/resource',
      // },
    ]
  },
  
  // plugins
  plugins: [
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