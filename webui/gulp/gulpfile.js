var gulp = require("gulp"),
    sq = require("streamqueue"),
    runSequence = require("run-sequence"),
    g = require("gulp-load-plugins")({ lazy: true }),
    cfg = require("./gulp.config")();

gulp.task("default", function() {
    var run = function() {
        runSequence("analyze", "build");
    };
    
    run();
    
    return gulp
        .watch([cfg.folders.src + "**/*", "!" + cfg.files.indexHtml], run);
});

gulp.task("analyze", function () {
    return gulp
        .src(cfg.files.appJs)
        .pipe(g.jscs())
        .pipe(g.jshint())
        .pipe(g.jshint.reporter("jshint-stylish", { verbose: true }))
        .pipe(g.jshint.reporter("fail"));
});

///////////
/* build */
///////////

gulp.task("build", function() {
    runSequence("build-clean", "build-copy");
});

gulp.task("build-clean", function() {
    return gulp
        .src(cfg.folders.build, {read: false})
		.pipe(g.clean({force: true}));
});

gulp.task("build-copy", function() {   
    var css = gulp
        .src(cfg.files.css)   
        .pipe(gulp.dest(cfg.folders.build + "css/"));
    
    var libJs = gulp
        .src(cfg.files.libJs)
        .pipe(gulp.dest(cfg.folders.build + "lib/"));
    
    var appJs = gulp
        .src(cfg.folders.app + "**/*.js")
        .pipe(g.angularFilesort())
        .pipe(g.ngAnnotate())
        .pipe(gulp.dest(cfg.folders.build + "app/"));
    
    gulp
        .src(cfg.folders.app + "**/*.html")
        .pipe(gulp.dest(cfg.folders.build + "app/"));
    
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
    
    return gulp
        .src(cfg.files.indexHtml)
        .pipe(g.inject(css, opts()))
        .pipe(g.inject(libJs, opts("lib")))
        .pipe(g.inject(appJs, opts("app")))
        .pipe(gulp.dest(cfg.folders.build));
});

//////////
/* dist */
//////////

gulp.task("tc", function() {
    return gulp
        .src(cfg.folders.app + "**/*.html")
        .pipe(g.angularTemplatecache({ module: "app", root: "app/" }))
        .pipe(gulp.dest("XXX"));
});

gulp.task("dist", function() {
    runSequence("dist-clean", "dist-copy");
});

gulp.task("dist-clean", function() {
    return gulp
        .src(cfg.folders.dist, {read: false})
		.pipe(g.clean({force: true}));
});

gulp.task("dist-copy", function () {
    var css = gulp
        .src(cfg.files.css)
        .pipe(g.concat("app.css"))
        .pipe(g.cleanCss())
        .pipe(g.rev())
        .pipe(gulp.dest(cfg.folders.dist + "css/"));

    var libJs = gulp
        .src(cfg.files.libJs)
        .pipe(g.concat("lib.js"))
        .pipe(g.uglify())
        .pipe(g.rev())
        .pipe(gulp.dest(cfg.folders.dist + "js/"));

    var appJs = gulp
        .src(cfg.files.appJs)
        .pipe(g.angularFilesort())
        .pipe(g.ngAnnotate());
    
    var templatesJs = gulp
        .src(cfg.folders.app + "**/*.html")
        .pipe(g.minifyHtml({ empty: true }))
        .pipe(g.angularTemplatecache({ module: "app", root: "app/" }));
    
    var appJsFinal = sq({ objectMode: true }, appJs, templatesJs)    
        .pipe(g.concat("app.js"))
        .pipe(g.uglify())
        .pipe(g.rev())
        .pipe(gulp.dest(cfg.folders.dist + "js/"));
    
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
    
    return gulp
        .src(cfg.files.indexHtml)
        .pipe(g.inject(css, opts()))
        .pipe(g.inject(libJs, opts("lib")))
        .pipe(g.inject(appJsFinal, opts("app")))
        .pipe(g.minifyHtml({ empty: true }))
        .pipe(gulp.dest(cfg.folders.dist));
});