var gulp = require('gulp');
var livereload = require('gulp-livereload');
var webserver = require('gulp-webserver');


var handleError = function (err) {
    console.log(err.name, ' in ', err.plugin, ': ', err.message);
    console.log(err.getStack());
    process.exit(1);
};


// Watch
gulp.task('watch', function () {

    gulp.watch('source/assets/**/*.css', ['css']);

    gulp.src('source')
        .pipe(webserver({
            host: '0.0.0.0',
            livereload: {
                enable: true
            },
            fallback: 'index.html'

        }));


    gulp.watch([
        'source/assets/!*.css',
        'source/index.html',
        'source/js/!**!/!*'
    ]).on('change', livereload.changed);
});
