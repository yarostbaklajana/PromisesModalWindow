/**
 * Created by yaros on 02.10.2016.
 */

module.exports = {

    entry: {
        filename: './app/main.ts'
    },

    output: {
        path: "dist",
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['', '.ts', '.css'],
        modules: ['node_modules']
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
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                loader: 'url-loader'
            },

            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file"
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


