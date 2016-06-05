var gulp = require("gulp");
var jshint = require("gulp-jshint");
var inject = require("gulp-inject");
var jscs = require("gulp-jscs");
var config = require("./gulp.config")();

gulp.task("vet", function () {
    return gulp.src(config.alljs)
        .pipe(jscs())
        .pipe(jshint())
        .pipe(jshint.reporter("jshint-stylish", { verbose: true }))
        .pipe(jshint.reporter("fail"));
});

gulp.task("wiredep", function () {
    var options = config.getWiredepDefaultOptions();
    var wiredep = require("wiredep").stream;

    return gulp
        .src(config.index)
        .pipe(wiredep(options))
        .pipe(inject(gulp.src(config.js)))
        .pipe(gulp.dest(config.root));
});

gulp.task("styles", function () {
    return gulp
        .src(config.index)
        .pipe(inject(gulp.src(config.css)))
        .pipe(gulp.dest(config.root));
});

gulp.task("default", ["vet", "wiredep", "styles"], function () { });