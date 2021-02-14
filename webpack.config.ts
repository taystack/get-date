import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'production',
  context: path.resolve(__dirname, 'source'),
  entry: './source/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'getDate.bundle.js',
  },
};

export default config;
