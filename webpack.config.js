const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProd = process.env.REACT_APP_NODE_ENV === 'production'

const config = {
  mode: isProd ? 'production' : 'development',
  output: {
    path: path.join(__dirname, "/dist"), // the bundle output path
    filename: "bundle.js", // the name of the bundle
  },
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@app': path.resolve(__dirname, './src/app'),
      '@icons': path.resolve(__dirname, './src/assets/images/icons'),
      '@images': path.resolve(__dirname, './src/assets/images'),
      '@styles': path.resolve(__dirname, './src/assets/styles'),
      '@components': path.resolve(__dirname, './src/views/components'),
      '@pages': path.resolve(__dirname, './src/views/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@context': path.resolve(__dirname, './src/context'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", // to import index.html file inside index.js
    }),
  ],
  devServer: {},
  devtool: 'hidden-source-map',
  module: {
    rules: [
      {
        test: /\.(js|ts)x$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
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

config.devServer = {
  static: path.join(__dirname, 'build'),
  historyApiFallback: true,
  port: process.env.REACT_APP_DEFAULT_PORT,
  open: {
    app: {
      name: 'google-chrome',
    },
  },
  hot: true,
}

module.exports = config;

