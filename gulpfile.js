/**
  @description Arquivo gulp de automação de tarefas
  @author Alisson Costa de Oliveira Júnior - alisson.coj@hotmail.com
*/
// ///////////////////////////
// dependencies
var gulp = require('gulp'); // dependência raiz

var sass = require('gulp-sass'); // converte o .sass para .css

var nano = require('gulp-cssnano'); // minifica o css

var autoprefixer = require('gulp-autoprefixer'); // coloca prefixo nas propriedades como 'moz-', 'webkit-'

var sourcemaps = require('gulp-sourcemaps'); // cria o map das funções e classes

var plumber = require('gulp-plumber'); // mostra os erros

var htmlmin = require('gulp-htmlmin'); // minifica o html


// ///////////////////////////
// gulp watch constructor task
gulp.task('watch-build', function () {
    gulp.watch('src/sass/**/*.sass', ['css']);
    gulp.watch('src/html/*.html', ['html']);
});

// ///////////////////////////
// init default
gulp.task('default', ['css', 'html']);
gulp.task('watch', ['default', 'watch-build']);

// ///////////////////////////
// css task
gulp.task('css', function () {
    return gulp.src('src/sass/master.sass')
        .pipe(sourcemaps.init())
        .pipe(plumber({
            handleError: function (error) {
                console.log(error);
                this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7']))
        .pipe(nano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./'));
});
// ///////////////////////////
// html task
gulp.task('html', function () {
  return gulp.src('src/html/*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('./'));
});
