/**
 * Created by yaros on 02.10.2016.
 */

module.exports = {
    
    entry: {
        filename: './app/main'
    },

    output: {
        path: __dirname + "/dist",
        filename: 'bundle.js',
        publicPath: './'
    },

    resolve: {
        extensions: ['', '.ts', '.css'],
        modules: ['node_modules', 'styles'],
        root: __dirname + '/styles'
    },




    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript',
                exclude: /node_modules/
            },

            {
                test: /\.css$/,
                loaders: ["style", "css"]
            },

            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)|\.ico($|\?)/,
                loader: 'url'
            },

            {
                test: /\.jpg($|\?)/,
                loader: 'url?limit=8192'
            }
        ],

        preLoaders: [
            {
                test: /\.ts$/,
                loader: "tslint"
            }
        ],

    },

    tslint: {
        configuration: {
            "extends": "tslint:latest",
            rules: {
                "indent": [true, "spaces"]
            }
        },

        emitErrors: false,

        failOnHint: true
    }
}


