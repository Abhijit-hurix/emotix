const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
module.exports = {
    entry: "./src/index.js",
    output: {
       /* path: __dirname,*/path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                            presets: ['react', 'es2015', 'stage-1']
                        }
            },
            { test: /\.css$/, 
              use:[{
                loader: "style-loader"
                 },
                {
                 loader: "css-loader"   
                },
                {
                 loader: "font-loader"   
                }
                ]
            },
             {
                test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                exclude: /node_modules/,
                 use: [{
                        loader:'file-loader'
                        }    
                    ]
             }
        ]
    },
    resolve: {
    extensions: ['.js', '.jsx']
    },
    plugins: [
                  new UglifyJSPlugin()
              ]
};