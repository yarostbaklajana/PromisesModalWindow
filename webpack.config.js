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
        extensions: ['', '.ts']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/
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
            rules: {
                "indent": [true, "spaces"]
            }
        },

        emitErrors: false,

        failOnHint: false,

        fileOutput: {
            dir: "./tsLint_report",
            ext: "xml",
            clean: true,
            header: "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<checkstyle version=\"5.7\">",
            footer: "</checkstyle>"
        }
    }
}


