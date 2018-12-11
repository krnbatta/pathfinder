var path = require('path');
var webpack = require('webpack');
 module.exports = {
   entry: ['./js/main.js'],
   output: {
     path: path.resolve(__dirname, 'build'),
     filename: 'app.js'
   },
   module: {
     loaders: [
       {
         test: /\.js$/,
         loader: 'babel-loader',
         query: {
           presets: ['es2015']
         }
       }
     ]
   },
   stats: {
     colors: true
   },
   devtool: 'source-map',
   devServer: {
     port: 3000,
     contentBase: __dirname,
     inline: true
   }
 };
//  const config = {
//     entry: ['./js/main.js'],
//     output: {
//       path: __dirname,
//       filename: 'app.js'
//     },
//     module: {
//       rules: [
//         {
//           loader:'babel-loader',
//           test: /\.js$/,
//           exclude:  /node_modules/,
//           query: {
//              presets: ['es2015']
//           }
//         }
//       ]
//     },
//     resolve: {
//       extensions: ['.js']
//     },
//     devServer:{
//       port: 3000,
//       contentBase: __dirname,
//       inline: true
//     }
// }
// module.exports = config;
