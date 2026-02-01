const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: "./src/index.js", // Entry point for our React app
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
  },
  mode: "devlopment", // Set to 'production' for production builds
  devtool: "source-map", // Generates source maps for debugging
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader", // Use Babel to transpile JS files
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',       // Injects styles into DOM
          'css-loader',         // Translates CSS into CommonJS
          'sass-loader',        // Compiles Sass to CSS
        ],
      },
      {
        test: /\.css$/,
        use: [
          // In production, extract CSS into a separate file
          // process.env.NODE_ENV === "production"
          //   ? MiniCssExtractPlugin.loader // Use MiniCssExtractPlugin in production
          //   : "style-loader", // Use style-loader in development for hot-reloading.  It inject CSS into DOM
          // MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader", // Resolve CSS imports and URLs
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource', // Webpack 5 built-in feature
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 4000,
    open: true,
    hot: true, // Enable hot-reloading for development
    headers: {
      // Ensure proper Cache-Control headers for testing
      "Cache-Control": "public, max-age=31536000, immutable", // Set caching rules
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Generates index.html with the bundled JS injected
    }),
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css", // Output CSS file name
    }),
  ],
};
