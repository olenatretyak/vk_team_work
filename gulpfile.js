var gulp = require('gulp');
var jade = require('gulp-jade');
var livereload = require('gulp-livereload');
var webserver = require('gulp-webserver');

var handleError = function (err) {
  console.log(err.name, ' in ', err.plugin, ': ', err.message);
  console.log(err.getStack());
  process.exit(1);
};


 gulp.task('http-server', function() {
        connect()
            // .use(require('connect-livereload')())
            .use(connect.static('./assets'))
            .use(connect.static('./index.html'))
            .listen('9000');

        console.log('Server listening on http://localhost:9000');
    });

    // Запуск сервера разработки gulp watch
    gulp.task('watch', function() {
        // Предварительная сборка проекта
        // gulp.run('stylus');
        // gulp.run('jade');
        // gulp.run('images');
        // gulp.run('js');

        // Подключаем Livereload
        server.listen(35729, function(err) {
            if (err) return console.log(err);

            //gulp.watch('assets/stylus/**/*.styl', function() {
                //gulp.run('stylus');
            //});
            //gulp.watch('assets/template/**/*.jade', function() {
                //gulp.run('jade');
           // });
            gulp.watch('index.html', function() {
                //gulp.run('images');
                console.log('gulp.watch index.html');
            });
            gulp.watch('css/**/*', function() {
                //gulp.run('images');
                console.log('gulp.watch css');
            });
            gulp.watch('img/**/*', function() {
                //gulp.run('images');
                console.log('gulp.watch img');
            });
            gulp.watch('js/**/*', function() {
                //gulp.run('js');
                console.log('gulp.watch js');
            });
        });
        gulp.run('http-server');
    });
