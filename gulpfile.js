var gulp = require('gulp');
var webpack = require('webpack-stream');
var webpackConfigFile = require('./webpack.config.js');


gulp.task('default', ["webpack", "css", "img", "html"]);

gulp.task('webpack', function () {
    return gulp.src('./index.js')
        .pipe(webpack(webpackConfigFile))
        .pipe(gulp.dest('out/js/'));
});

gulp.task('css', function () {
    return gulp.src('css/style.css')
        .pipe(gulp.dest('out/css/'));
});

gulp.task('html', function () {
    return gulp.src('index.html')
        .pipe(gulp.dest('out/'));
});

gulp.task('img', function () {
    return gulp.src('./img/**/*.*',{ base: './' })
        .pipe(gulp.dest('out/'));
});
