const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // Set Webpack mode to development
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
  },
  output: {
    filename: '[name].bundle.js', // Output JavaScript file names
    path: path.resolve(__dirname, 'public'), // Output directory
  },
  devServer: {
    port: 8564, // Development server port
    open: true, // Open the browser automatically
    hot: true, // Enable hot module replacement
  },
  devtool: 'inline-source-map', // Enable inline source mapping
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use this template for HTML generation
    }),
    new CleanWebpackPlugin(), // Clean the build folder on each build
  ],
  optimization: {
    splitChunks: {
      chunks: 'all', // Split shared dependencies into chunks
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // Handle CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Handle image files
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets', // Output images to the 'assets' folder
            },
          },
          {
            loader: 'image-webpack-loader', // Optimize images
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },
};