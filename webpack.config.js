const path = require("path");

var baseConfig = {
    mode: "development",
    entry: {
        client: path.resolve(__dirname, './React/client.tsx')
    },
    output: {
        path: '',
        filename: "[name].js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".scss", ".css"]
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                loader: 'babel-loader!ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3|eot|otf)$/,
                loader: "file-loader",
                options: {
                    name: "[folder]/[name].[ext]"
                }
            }
        ]
    }
};

module.exports = [
    {
        ...baseConfig,
        output: {
            ...baseConfig.output,
            path: path.resolve(__dirname, "./wwwroot/react")
        }
    }
];