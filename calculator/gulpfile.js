var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');

gulp.task('sass', function() {
    return sass('src/css/*.scss', {style: 'expanded'}).
            pipe(autoprefixer('last 2 versions')).
            pipe(gulp.dest('dist/assets/css')).
            pipe(rename({suffix: '.min'})).
            pipe(minifycss()).
            pipe(gulp.dest('dist/assets/css')).
            pipe(notify({message: 'Sass task complete'}))
            ;
});

gulp.task('clean', function() {
    return del(['dist/assets/css']);
});

gulp.task('default', ['clean'], function() {
    gulp.start('sass');
});
