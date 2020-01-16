const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

const plugins = []

const isLib = process.env.ISLIB === true

if (isLib) {
    plugins.push(new MonacoWebpackPlugin({
        languages:["javascript","css","html","json"],
        features:["coreCommands","find"]
    }))
}

module.exports = {
    configureWebpack: {
        plugins: plugins
    }
}