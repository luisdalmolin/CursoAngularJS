var gulp    = require('gulp'),
    concat  = require('gulp-concat'),
    uglify  = require('gulp-uglify'),
    sass    = require('gulp-sass'),
    connect = require('gulp-connect'),
    shell   = require('gulp-shell');

gulp.task('default', function() {
    gulp.start('scripts', 'sass');
});

gulp.task('scripts', function() {
    gulp.src([
            'scripts/main.js',
            'scripts/components/**/*.js'
        ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('.'))
        .pipe(connect.reload());
});

gulp.task('sass', function() {
    gulp.src('styles/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('styles/css'));
});

gulp.task('watch', function() {
    gulp.start('scripts', 'sass');

    gulp.watch('scripts/**/*.js', ['scripts']);
    gulp.watch('styles/scss/**/*.scss', ['sass']);
});

gulp.task('serve', function() {
    connect.server();

    gulp.src('index.html')
        .pipe(shell(['open http://localhost:8080']));
});
