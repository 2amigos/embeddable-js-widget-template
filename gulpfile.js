var gulp = require('gulp');

// include plugins 
var run = require('gulp-run');

// use gulp-run to build requirejs optimizer
gulp.task('build', function () {
    return run('r.js -o build.js').exec()
        .pipe(gulp.dest('output'))
});

// use watch to automatically build when the file has been changed
gulp.task('watch', function () {
    gulp.watch('js/*.js', ['build']);
});

gulp.task('move', ['build'], function () {
    return run('cp ./dist/widget.min.js ~/{YOUR-PATH}}/js/').exec()
        .pipe(gulp.dest('output'));
});
