/* eslint-disable no-undef */
const path= require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");
module.exports ={
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    mode:"production",//or development or none
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
                {
                test:/\.js$/,
                exclude: /node_modules/,

                use:{
                    loader:'babel-loader',
                    options:{
                        presets:["@babel/preset-env"],
                        sourceType: 'module' // Add this line here
                    },
                },
            },
        ],
    },
plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
devServer: {
    static:{
        directory: path.resolve(__dirname,'dist'),//replaces content base
    },
    hot: true,//enable hmr
    open: true,
}
};