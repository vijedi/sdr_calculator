var gulp = require('gulp'),
    browserify = require('browserify'),
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
    sourcemaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util'),
    buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream'),
    through = require('through2'),
    globby = require('globby'),
    babelify = require('babelify'),
    debug = require('gulp-debug'),
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
            pipe(gulp.dest('dist/assets/vendor/css'))
            ;
});

gulp.task('docs', function() {
    return gulp.src('src/**/*.html').
            pipe(gulp.dest('dist/'))
            ;
});

gulp.task('fonts', function() {
    return gulp.src('src/fonts/vendor/**/*').
            pipe(gulp.dest('dist/assets/vendor/css/themes/default/assets/fonts'))
            ;
});


gulp.task('images', function() {
    return gulp.src('src/images/**/*').
            pipe(gulp.dest('dist/assets/images'))
            ;
});

gulp.task('vendorjs', function() {
    return gulp.src([
                'src/js/vendor/jquery-2.1.4.js',
                'src/js/vendor/semantic.min.js'
            ]).
            pipe(concat('vendor.min.js')).
            pipe(uglify()).
            pipe(gulp.dest('dist/assets/vendor/js'))
            ;
});

gulp.task('appjs', function() {
    // gulp expects tasks to return a stream, so we create one here.
    var bundledStream = through();

    bundledStream
        // turns the output bundle stream into a stream containing
        // the normal attributes gulp plugins expect.
        .pipe(source('app.js'))
        // the rest of the gulp task, as you would normally write it.
        // here we're copying from the Browserify + Uglify2 recipe.
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        // Add gulp plugins to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/assets/js'));

    // "globby" replaces the normal "gulp.src" as Browserify
    // creates it's own readable stream.
    globby(['src/js/app/*.js', 'src/js/app/*.jsx']).then(function(entries) {
        // create the Browserify instance.
        var b = browserify({
            entries: entries,
            debug: true,
            transform: [['babelify', {'presets': ['react', 'es2015']}]]
        });

        // pipe the Browserify stream into the stream we created earlier
        // this starts our gulp pipeline.
        b.bundle().pipe(bundledStream);
    }).catch(function(err) {
        // ensure any errors from globby are handled
        bundledStream.emit('error', err);
    });

    // finally, we return the stream, so gulp knows when this task is done.
    return bundledStream;
});


gulp.task('clean', function() {
    return del(['dist/assets/css/app', 'dist/**/*.html', 'dist/assets/js/app', 'dist/assets/fonts', 'dist/assets/images']);
});

gulp.task('clean_all', function() {
    return del(['dist/**/*']);
});

gulp.task('default', ['clean'], function() {
    gulp.start('sass', 'docs', 'appjs', 'fonts', 'images');
});

gulp.task('all', ['clean_all'], function() {
    gulp.start('vendorcss', 'vendorjs', 'sass', 'docs', 'appjs', 'fonts', 'images');
});

gulp.task('watch', function() {
    gulp.watch(['src/js/app/**/*.js', 'src/js/app/**/*.jsx'], ['appjs']);
    gulp.watch('src/css/*.scss', ['sass']);
    gulp.watch('src/**/*.html', ['docs']);
});
