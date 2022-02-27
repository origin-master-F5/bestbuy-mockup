var path = require('path');

module.exports = {
  mode: "development",
  entry: path.join(__dirname, '/client/src/index.jsx'),
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '/public')
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: path.join(__dirname, '/client/src'),
        use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
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
