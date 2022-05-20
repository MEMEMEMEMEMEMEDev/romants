const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");

// refactor

module.exports = {
  entry: {
    app: "./src/index.tsx",
  },
  mode: "development",
  devtool: "source-map",
  optimization: {
    usedExports: true,
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
              publicPath: "images/",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
              publicPath: "fonts/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ESLintWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
    }),
    new ForkTsCheckerWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: "./src/assets",
          to: "./assets",
        },
      ],
    }),
  ],
};
// module.exports = {
//   entry: "./src/index.tsx",
//   mode: "development",
//   devtool: "source-map",
//   optimization: {
//     usedExports: true,
//   },
//   output: {
//     filename: "[name].[contenthash].js",
//     path: path.resolve(__dirname, "dist"),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         exclude: /node_modules/,
//         loader: "ts-loader",
//         options: {
//           transpileOnly: false,
//         },
//       },
//       {
//         test: /\.css$/,
//         use: [
//           MiniCssExtractPlugin.loader,
//           {
//             loader: "css-loader",
//             options: {
//               modules: true,
//               sourceMap: true,
//             },
//           },
//         ],
//       },
//       {
//         test: /\.s[ac]ss$/i,
//         use: [
//           // Creates `style` nodes from JS strings
//           "style-loader",
//           // Translates CSS into CommonJS
//           "css-loader",
//           // Compiles Sass to CSS
//           "sass-loader",
//         ],
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".tsx", ".ts", ".js"],
//   },
//   plugins: [
//     new MiniCssExtractPlugin({
//       // Options similar to the same options in webpackOptions.output
//       // both options are optional
//       filename: "[name].[contenthash].css",
//       chunkFilename: "[id].css",
//     }),

//     new HtmlWebpackPlugin({
//       template: "./public/index.html",
//       filename: "./index.html",
//     }),

//     new CleanWebpackPlugin(),

//     new ForkTsCheckerWebpackPlugin(),

//     new CopyPlugin({
//       patterns: [
//         {
//           from: "./src/assets",
//           to: "./assets",
//           noErrorOnMissing: true,
//         },
//       ],
//     }),

//     new ESLintWebpackPlugin({
//       files: ["src/**/*.{ts,tsx}"],
//     }),
//   ],
// };
