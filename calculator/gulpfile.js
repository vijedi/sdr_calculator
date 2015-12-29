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
    addsrc = require('gulp-add-src'),
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

gulp.task('vendorcss', function() {
    return gulp.src('src/css/**/*.css').
            pipe(concat('vendor.min.css')).
            pipe(minifycss()).
            pipe(gulp.dest('dist/assets/css')).
            pipe(notify({message: 'Vendor CSS task complete'}))
            ;
});

gulp.task('docs', function() {
    return gulp.src('src/**/*.html').
            pipe(gulp.dest('dist/')).
            pipe(notify({message: 'Docs task complete'}))
            ;
});

gulp.task('fonts', function() {
    return gulp.src('src/fonts/**/*').
            pipe(gulp.dest('dist/assets/css/themes/default/assets/fonts')).
            pipe(notify({message: 'Fonts task complete'}))
            ;
});


gulp.task('vendorjs', function() {
    return gulp.src('src/js/vendor/**/*.js').
            pipe(concat('vendor.min.js')).
            pipe(uglify()).
            pipe(gulp.dest('dist/assets/js')).
            pipe(notify({ message: 'Scripts task complete' }))
            ;
});

gulp.task('appjs', function() {
    return gulp.src('src/js/app/**/*.js').
            pipe(concat('app.js')).
            pipe(gulp.dest('dist/assets/js')).
            pipe(rename({suffix: '.min'})).
            pipe(uglify()).
            pipe(gulp.dest('dist/assets/js')).
            pipe(notify({ message: 'Scripts task complete' }))
            ;
});


gulp.task('clean', function() {
    return del(['dist/assets/css', 'dist/**/*.html', 'dist/assets/js', 'dist/assets/fonts']);
});

gulp.task('default', ['clean'], function() {
    gulp.start('sass', 'docs', 'vendorcss', 'vendorjs', 'appjs', 'fonts');
});

gulp.task('watch', function() {
    gulp.watch('src/js/app/**/*.js', ['appjs']);
    gulp.watch('src/css/*.scss', ['sass']);
    gulp.watch('src/**/*.html', ['docs']);
});
