var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');

gulp.task('less', function () {
    return gulp.src('./less/style.less')
        .pipe(less())
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream())
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', ['browser-sync', 'less'], function () {
    gulp.watch('./less/**/*.less', ['less'], function () {
        return gulp.src('./less/style.less')
            .pipe(less())
            .pipe(gulp.dest('./css/'))
            .pipe(browserSync.stream())
    })
});
