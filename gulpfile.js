'use strict';

const gulp = require('gulp'),
    $ = require('gulp-load-plugins')({
        rename: {
            'gulp-live-server': 'serve'
        }
    }),
    cssmin = require('gulp-cssmin'),
    del = require('del'),
    concat = require('gulp-concat');

gulp.task('styles', ['clean-styles'], function () {
    return gulp
        .src(['assets/less/**/*.less'])
        .pipe($.plumber())
        .pipe($.less({
            paths: ['assets/less/']
        }))
        .pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('assets/css'))
});

gulp.task('clean-styles', function () {
    clean('assets/css/style.css');
});

function clean(path) {
    del(path);
}

gulp.task('less-watcher', function () {
    gulp.watch('assets/less/**/*.less', ['styles']);
});