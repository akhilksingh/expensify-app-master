//entry point -> output
//here we write all config related information
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");



module.exports =(env)=>{
    const isProduction = env == 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
    
    return {
        entry : './public/src/app.js',
    output : {
        path : path.join(__dirname,'public/','dist'),
        filename : 'bundle.js'

    },
    module : {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude : /node_modules/
        },
        {//loader supports a set of option So we can define source map for loaders
            test:/\.s?css$/,
            use: CSSExtract.extract({
                use :[ 
                    {
                        loader: 'css-loader',
                        options : {
                            sourceMap : true
                                    }
                    },
                    {
                        loader: 'sass-loader',
                        options : {
                                  sourceMap : true
                                }
                    }]
            })

        }]
    },
    plugins : [CSSExtract],
    devtool: isProduction ? 'source-map':'inline-source-map',
    devServer : {
        contentBase : path.join(__dirname,'public'),
        historyApiFallback : true,
        publicPath: '/dist/'
    }
    };
};




//loader -> lets you customize the behaviour of webpack
//loader for scss -> convert to css
//babel-loader-> to teach webpack how to run babel
//bebelrc - to include presets
// devserver - similar to live-server with more features