'use strict';

const gulp = require('gulp'),
    gutil = require('gulp-util'),
    plugins = require('gulp-load-plugins')({
        rename: {
            'gulp-live-server': 'serve'
        }
    });

gulp.task('default', ['watch']);

gulp.task('watch', function () {
    gulp.watch('less/**/*.less', ['build-css']);
});

gulp.task('build-css', function () {
    return gulp.src('less/*.less')
        .pipe(plugins.plumber())
        .pipe(plugins.less())
        .on('error', function (err) {
            console.log(err);
            gutil.log(err);
            this.emit('end');
        })
        .pipe(plugins.cssmin())
        .pipe(gulp.dest('css')).on('error', function (err) {
            console.log(err);
            gutil.log(err);
        });
});