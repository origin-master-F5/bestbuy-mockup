const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'client/src/index.jsx'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [{
            test: /\.m?jsx$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        }, 
        {
            test: /\.(png|jp(e*)g|svg|gif)$/,
            use: 
              {
                loader: 'file-loader',
                options: {
                  name: 'images/[hash]-[name].[ext]',
                },
              },
            
          },
        ]
    }
};