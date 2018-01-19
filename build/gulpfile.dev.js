var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer'); // ����css����������ݵ�ǰ׺  
var rename = require('gulp-rename'); //������  
var cssnano = require('gulp-cssnano'); // css�Ĳ㼶ѹ���ϲ�
var sass = require('gulp-sass'); //sass
var jshint = require('gulp-jshint'); //js��� ==> npm install --save-dev jshint gulp-jshint��.jshintrc��https://my.oschina.net/wjj328938669/blog/637433?p=1��  
var uglify = require('gulp-uglify'); //jsѹ��  
var concat = require('gulp-concat'); //�ϲ��ļ�  
var imagemin = require('gulp-imagemin'); //ͼƬѹ�� 
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var Config = require('./gulpfile.config.js');
//======= gulp dev ���������� ===============
function dev() {
    /** 
     * HTML���� 
     */
    gulp.task('html:dev', function () {
        return gulp.src(Config.html.src).pipe(gulp.dest(Config.html.dist)).pipe(reload({
            stream: true
        }));
    });
    /** 
     * assets�ļ����µ������ļ����� 
     */
    gulp.task('assets:dev', function () {
        return gulp.src(Config.assets.src).pipe(gulp.dest(Config.assets.dist)).pipe(reload({
            stream: true
        }));
    });
    /** 
     * CSS��ʽ���� 
     */
    gulp.task('css:dev', function () {
        return gulp.src(Config.css.src).pipe(gulp.dest(Config.css.dist)).pipe(reload({
            stream: true
        }));
    });
    /** 
     * SASS��ʽ���� 
     */
    gulp.task('sass:dev', function () {
        return gulp.src(Config.sass.src).pipe(sass()).pipe(gulp.dest(Config.sass.dist)).pipe(reload({
            stream: true
        }));
    });
    /** 
     * js���� 
     */
    gulp.task('js:dev', function () {
        return gulp.src(Config.js.src).pipe(jshint()).pipe(jshint.reporter('default')).pipe(gulp.dest(Config.js.dist)).pipe(reload({
            stream: true
        }));
    });
    /** 
     * ͼƬ���� 
     */
    gulp.task('images:dev', function () {
        return gulp.src(Config.img.src).pipe(imagemin({
            optimizationLevel: 3
            , progressive: true
            , interlaced: true
        })).pipe(gulp.dest(Config.img.dist)).pipe(reload({
            stream: true
        }));
    });
    gulp.task('dev', ['html:dev', 'css:dev', 'sass:dev', 'js:dev', 'assets:dev', 'images:dev'], function () {
        browserSync.init({
            server: {
                baseDir: Config.dist
            }
            , notify: false
        });
        // Watch .html files  
        gulp.watch(Config.html.src, ['html:dev']);
        // Watch .css files  
        gulp.watch(Config.css.src, ['css:dev']);
        // Watch .scss files  
        gulp.watch(Config.sass.src, ['sass:dev']);
        // Watch assets files  
        gulp.watch(Config.assets.src, ['assets:dev']);
        // Watch .js files  
        gulp.watch(Config.js.src, ['js:dev']);
        // Watch image files  
        gulp.watch(Config.img.src, ['images:dev']);
    });
}
//======= gulp dev ���������� ===============
module.exports = dev;