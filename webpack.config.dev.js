const config = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
      filename: './public/js/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react']
                }
            }
        ]
    }
  };
  
  module.exports = config;