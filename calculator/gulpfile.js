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
    babel = require('gulp-babel'),
    del = require('del');

gulp.task('sass', function() {
    return sass('src/css/*.scss', {style: 'expanded'}).
            pipe(autoprefixer('last 2 versions')).
            pipe(gulp.dest('dist/assets/css')).
            pipe(rename({suffix: '.min'})).
            pipe(minifycss()).
            pipe(gulp.dest('dist/assets/css'))
            ;
});

gulp.task('vendorcss', function() {
    return gulp.src('src/css/**/*.css').
            pipe(concat('vendor.min.css')).
            pipe(minifycss()).
            pipe(gulp.dest('dist/assets/css'))
            ;
});

gulp.task('docs', function() {
    return gulp.src('src/**/*.html').
            pipe(gulp.dest('dist/'))
            ;
});

gulp.task('fonts', function() {
    return gulp.src('src/fonts/**/*').
            pipe(gulp.dest('dist/assets/css/themes/default/assets/fonts'))
            ;
});


gulp.task('images', function() {
    return gulp.src('src/images/**/*').
            pipe(gulp.dest('dist/assets/images'))
            ;
});

gulp.task('vendorjs', function() {
    return gulp.src('src/js/vendor/**/*.js').
            pipe(concat('vendor.min.js')).
            pipe(uglify()).
            pipe(gulp.dest('dist/assets/js'))
            ;
});

gulp.task('appjs', function() {
    return gulp.src('src/js/app/**/*.jsx').
            pipe(babel({presets: ['react', 'es2015']})).
            pipe(concat('app.js')).
            pipe(gulp.dest('dist/assets/js')).
            pipe(rename({suffix: '.min'})).
            pipe(uglify()).
            pipe(gulp.dest('dist/assets/js'))
            ;
});


gulp.task('clean', function() {
    return del(['dist/assets/css', 'dist/**/*.html', 'dist/assets/js', 'dist/assets/fonts', 'dist/assets/images']);
});

gulp.task('default', ['clean'], function() {
    gulp.start('sass', 'docs', 'vendorcss', 'vendorjs', 'appjs', 'fonts', 'images');
});

gulp.task('watch', function() {
    gulp.watch('src/js/app/**/*.js', ['appjs']);
    gulp.watch('src/css/*.scss', ['sass']);
    gulp.watch('src/**/*.html', ['docs']);
});
