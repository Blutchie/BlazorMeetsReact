const path = require("path");
const fs = require("fs");

module.exports = {
    entry: () => fs.readdirSync("./React/Components/").filter(f => f.endsWith(".js")).map(f => `./React/Components/${f}`),
    devtool: "source-map",
    mode: "development",
    output: {
        filename: "react-app.js",
        path: path.resolve(__dirname, "./wwwroot/react-scripts")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"]
            }
        ]
    }
}