const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'   
    },
    devtool: 'inline-source-map',
    devServer: { contentBase: './dist'},
    output: {
        // filename: 'main.js',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
     // mode: 'development',
    optimization: {
        splitChunks: {
        chunks: "all"
        }
    },    
    module: {
        rules: [
        {
          test: /\.(png|jpg|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                context: 'src',
                name: '[path][name].[ext]'
              }
            }
          ]
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: "/"
              }
            }, {
              loader: 'css-loader'
            }, {
              loader: 'resolve-url-loader'
            }, {
              loader: 'sass-loader'
            }
          ]
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/env'],
                plugins: ['@babel/plugin-proposal-class-properties']
              }
            }
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: 'html-loader',
                options: {
                  minimize: true,
                  interpolation: false
                }
              }
            ]
          },
          { test: /\.graphql?$/, loader: 'webpack-graphql-loader' },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: "./src/*html",
                    to: "",
                    flatten: true
                },
                {
                  from: "./src/images/*",
                  to: "images/",
                  flatten: true
                }
            ],
        }),
        new MiniCssExtractPlugin({
            attributes: {
                filename: '[name].css',
                chunkFilename: '[id].css',
                publicPath: "../"
            },
        }),
    ]
    
};