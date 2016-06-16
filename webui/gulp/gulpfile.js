var gulp = require("gulp"),
    es = require("event-stream"),
    runSequence = require("run-sequence"),
    g = require("gulp-load-plugins")({ lazy: true }),
    cfg = require("./gulp.config")();

gulp.task("default", function() {
    var run = function() {
        runSequence("analyze", "inject", "build");
    };
    
    run();
    
    return gulp
        .watch([cfg.folders.src + "**/*", "!" + cfg.files.indexHtml], run);
});

gulp.task("analyze", function () {
    log("Analyzing source code");

    return gulp
        .src(cfg.files.jsHint)
        .pipe(g.jscs())
        .pipe(g.jshint())
        .pipe(g.jshint.reporter("jshint-stylish", { verbose: true }))
        .pipe(g.jshint.reporter("fail"));
});

gulp.task("inject", function() {
    log("Injecting JavaScript & Css files into index.html");
    
    var opts = function (name, type) {
        return {
            ignorePath: cfg.folders.src, 
            addRootSlash: false, 
            name: name
        };
    };
    
    return gulp
        .src(cfg.files.indexHtml)
        .pipe(g.inject(gulp.src(cfg.files.libCss, {read: false}), opts("lib-css")))
        .pipe(g.inject(gulp.src(cfg.files.appCss, {read: false}), opts("app-css")))
        .pipe(g.inject(gulp.src(cfg.files.libJs, {read: false}), opts("lib-js")))
        .pipe(g.inject(gulp.src(cfg.files.appJs, {read: false}), opts("app-js")))
        .pipe(gulp.dest(cfg.folders.src));
});

///////////
/* Build */
///////////

gulp.task("build", function() {
    runSequence("build-clean", "build-copy");
});

gulp.task("build-clean", function() {  
    log("Deleting build folder");
    
    return gulp
        .src(cfg.folders.build, {read: false})
		.pipe(g.clean({force: true}));
});

gulp.task("build-copy", function() {    
    log("Copying lib-css files into build");    
    var libCss = gulp
        .src(cfg.files.libCss)
        .pipe(gulp.dest(cfg.folders.build + "css/"));
    
    log("Copying app-css files into build");
    var appCss = gulp
        .src(cfg.files.appCss)
        .pipe(gulp.dest(cfg.folders.build + "css/"));
    
    log("Copying lib-js files into build");
    var libJs = gulp
        .src(cfg.files.libJs)
        .pipe(gulp.dest(cfg.folders.build + "lib/"));    
    
    log("Copying html files into build");
    gulp
        .src(cfg.folders.app + "**/*.html")
        .pipe(gulp.dest(cfg.folders.build + "app/"));
    
    log("Copying app-js files into build");
    var appJs = gulp.src(cfg.folders.app + "**/*.js")
        .pipe(g.ngAnnotate())
        .pipe(gulp.dest(cfg.folders.build + "app/"));
    
    log("Copying font files into build");
    gulp
        .src(cfg.files.fontawesome)
        .pipe(gulp.dest(cfg.folders.build + "fonts/"));
    
    var opts = function (name, type) {
        return {
            ignorePath: cfg.folders.build, 
            addRootSlash: false, 
            name: name
        };
    };
    
    log("Injecting JavaScript & Css files into index.html");
    return gulp
        .src(cfg.files.indexHtml)
        .pipe(g.inject(libCss, opts("lib-css")))
        .pipe(g.inject(appCss, opts("app-css")))
        .pipe(g.inject(libJs, opts("lib-js")))
        .pipe(g.inject(appJs, opts("app-js")))
        .pipe(gulp.dest(cfg.folders.build));
});

//////////
/* dist */
//////////

gulp.task("dist", function() {
    runSequence("dist-clean", "dist-copy");
});

gulp.task("dist-clean", function() {
    log("Deleting dist folder");
    
    return gulp
        .src(cfg.folders.dist, {read: false})
		.pipe(g.clean({force: true}));
});

gulp.task("dist-copy", function () {
    log("Copying lib-css files into dist");
    var libCss = gulp
        .src(cfg.files.libCss)
        .pipe(g.concat("lib.css"))
        .pipe(g.cleanCss())
        .pipe(g.rev())
        .pipe(gulp.dest(cfg.folders.dist + "css/"));

    log("Copying app-css files into dist");
    var appCss = gulp
        .src(cfg.files.appCss)
        .pipe(g.concat("app.css"))
        .pipe(g.cleanCss())
        .pipe(g.rev())
        .pipe(gulp.dest(cfg.folders.dist + "css/"));

    log("Copying lib-js files into dist");
    var libJs = gulp
        .src(cfg.files.libJs)
        .pipe(g.concat("lib.js"))
        .pipe(g.uglify())
        .pipe(g.rev())
        .pipe(gulp.dest(cfg.folders.dist + "js/"));

    log("Copying app-js files into dist");
    var appJs = gulp
        .src(cfg.files.appJs)
        .pipe(g.angularFilesort())
        .pipe(g.ngAnnotate())
        .pipe(g.concat("app.js"))
        .pipe(g.uglify())
        .pipe(g.rev())
        .pipe(gulp.dest(cfg.folders.dist + "js/"));
    
    log("Copying html templates into dist");
    var templatesJs = gulp
        .src(cfg.folders.app + "**/*.html")
        .pipe(g.minifyHtml({ empty: true }))
        .pipe(g.angularTemplatecache({ module: "app", root: "app/" }))
        .pipe(g.rev())
        .pipe(gulp.dest(cfg.folders.dist + "js/"));
    
    log("Copying font files into dist");
    gulp
        .src(cfg.files.fontawesome)
        .pipe(gulp.dest(cfg.folders.dist + "fonts/"));
    
    var opts = function (name, type) {
        return {
            ignorePath: cfg.folders.dist, 
            addRootSlash: false, 
            name: name
        };
    };
    
    log("Optimizing & injecting JavaScript & Css files into index.html");
    return gulp
        .src(cfg.files.indexHtml)
        .pipe(g.inject(libCss, opts("lib-css")))
        .pipe(g.inject(appCss, opts("app-css")))
        .pipe(g.inject(libJs, opts("lib-js")))
        .pipe(g.inject(es.merge(appJs, templatesJs), opts("app-js")))
        .pipe(gulp.dest(cfg.folders.dist));
});

////////////////

function log(msg) {
    g.util.log(g.util.colors.blue(msg + "..."));
}
