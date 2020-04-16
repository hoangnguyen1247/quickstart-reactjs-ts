module.exports = {    
    "ignore": [
        "node_modules",
        "build"
    ],
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript"
    ],
    "plugins": [
        "@babel/plugin-transform-typescript",
        ["module-resolver", {
            "root": ["."],
            "extensions": [
                ".js",
                ".ts",
                ".tsx",
                ".json"
            ],
            "alias": {
                "src": ["./src/"],
                "server": ["./server/"]
            }
        }]
    ],
    "sourceMaps": "inline"
}