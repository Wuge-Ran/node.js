// 分离出css文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩css
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = {
    plugins: [new MiniCssExtractPlugin({
            filename: 'index.min.css',//删除空格、换行
    },
    
    )],
    module: {
        rules: [
            {
            test: /\.css$/i,
            use: [ 
                MiniCssExtractPlugin.loader,
                'css-loader'
                ],
            },

        ],
    },
    optimization: {
        minimizer: [new OptimizeCssAssetsWebpackPlugin({
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
              preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true
          })]
    }
};    