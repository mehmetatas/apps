module.exports = function () {
    var srcFolder = "../src/";
    var appFolder = srcFolder + "app/";
    var cssFolder = srcFolder + "css/";
    var libFolder = srcFolder + "lib/";
    var buildFolder = "../deploy/build/";
    var distFolder = "../deploy/dist/";
    
    var nmFolder = "../node_modules/";
    
    var allAppJsFiles = appFolder + "**/*.js";
    var allCssFiles = cssFolder + "**/*.css";

    var config = {
        files: {
            appCss: [
                cssFolder + "base.css",
                cssFolder + "layout.css",
                allCssFiles
            ],
            appJs: [
                appFolder + "app.global.js",
                appFolder + "app.modlue.js",
                appFolder + "app.*.js",
                allAppJsFiles
            ],
            fontawesome: nmFolder + "font-awesome/fonts/**/*",
            indexHtml: srcFolder + "index.html",
            jsHint: [
                allAppJsFiles,
                "./*.js"
            ],
            libCss: [
                nmFolder + "bootstrap/dist/css/bootstrap.css",
                nmFolder + "bootstrap-markdown/css/bootstrap-markdown.min.css",
                nmFolder + "font-awesome/css/font-awesome.css",
                nmFolder + "nanoscroller/bin/css/nanoscroller.css"
            ],
            libJs: [
                nmFolder + "jquery/dist/jquery.js",
                nmFolder + "to-markdown/dist/to-markdown.js",
                nmFolder + "markdown/lib/markdown.js",
                nmFolder + "faker/build/build/faker.js",
                nmFolder + "nanoscroller/bin/javascripts/jquery.nanoscroller.js",
                nmFolder + "bootstrap/dist/js/bootstrap.js",
                nmFolder + "bootstrap-markdown/js/bootstrap-markdown.js",
                nmFolder + "angular/angular.js",
                nmFolder + "angular-animate/angular-animate.js",
                nmFolder + "angular-sanitize/angular-sanitize.js",
                nmFolder + "angular-ui-router/release/angular-ui-router.js",
                libFolder + "angular-nanoscroller/angular-nanoscroller.js",
                libFolder + "contextmenu/jquery.bootstrap-contextmenu.js"
            ]
        },
        folders: {
            app: appFolder,
            build: buildFolder,
            dist: distFolder,
            src: srcFolder
        }
    };

    return config;
};