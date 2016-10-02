/**
 * Created by yaros on 02.10.2016.
 */

module.exports = {
    entry: {
        filename: './app/main.ts'
    },

    output: {
       filename: './dist/bundle.js'
    },

    resolve: {
        extensions: ['', '.ts', '.js']
    },

    // Add loader for .ts files.
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }
};
