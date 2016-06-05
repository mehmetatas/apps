module.exports = function () {
    var app = "./app/";

    var config = {
        alljs: [
            app + "**/*.js",
            "./*.js"
        ],
        css: "./style/**/*.css",
        root: "./",
        index: "./index.html",
        js: [
            "./lib/**/*.js",
            app + "**/global.js",
            app + "**/*.module.js",
            app + "**/*.js"
        ],
        bower: {
            json: require("./bower.json"),
            directory: "./bower_components",
            ignorePath: "../.."
        }
    };

    config.getWiredepDefaultOptions = function() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };

    return config;
};