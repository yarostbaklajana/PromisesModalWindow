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

    // Add loader for .ts files.
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/
            }
        ]
    }
};
