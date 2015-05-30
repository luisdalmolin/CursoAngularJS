var gulp   = require('gulp'),
    concat = require('gulp-concat');

gulp.task('default', function() {
    gulp.src('scripts/*')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
    gulp.watch('scripts/*.js', ['default']);
});
