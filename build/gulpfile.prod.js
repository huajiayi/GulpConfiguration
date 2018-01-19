var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer'); // ����css����������ݵ�ǰ׺  
var rename = require('gulp-rename'); //������  
var cssnano = require('gulp-cssnano'); // css�Ĳ㼶ѹ���ϲ�
var sass = require('gulp-sass'); //sass
var jshint = require('gulp-jshint'); //js��� ==> npm install --save-dev jshint gulp-jshint��.jshintrc��https://my.oschina.net/wjj328938669/blog/637433?p=1��  
var uglify = require('gulp-uglify'); //jsѹ��  
var concat = require('gulp-concat'); //�ϲ��ļ�  
var imagemin = require('gulp-imagemin'); //ͼƬѹ�� 
var Config = require('./gulpfile.config.js');
//======= gulp build �����Դ ===============
function prod() {
    /** 
     * HTML���� 
     */
    gulp.task('html', function () {
        return gulp.src(Config.html.src).pipe(gulp.dest(Config.html.dist));
    });
    /** 
     * assets�ļ����µ������ļ����� 
     */
    gulp.task('assets', function () {
        return gulp.src(Config.assets.src).pipe(gulp.dest(Config.assets.dist));
    });
    /** 
     * CSS��ʽ���� 
     */
    gulp.task('css', function () {
        return gulp.src(Config.css.src).pipe(autoprefixer('last 2 version')).pipe(gulp.dest(Config.css.dist)).pipe(rename({
                suffix: '.min'
            })).pipe(cssnano()) //ִ��ѹ��  
            .pipe(gulp.dest(Config.css.dist));
    });
    /** 
     * SASS��ʽ���� 
     */
    gulp.task('sass', function () {
        return gulp.src(Config.sass.src).pipe(autoprefixer('last 2 version')).pipe(sass()).pipe(gulp.dest(Config.sass.dist)).pipe(rename({
                suffix: '.min'
            })) //renameѹ������ļ���  
            .pipe(cssnano()) //ִ��ѹ��  
            .pipe(gulp.dest(Config.sass.dist));
    });
    /** 
     * js���� 
     */
    gulp.task('js', function () {
        return gulp.src(Config.js.src).pipe(jshint()).pipe(jshint.reporter('default')).pipe(gulp.dest(Config.js.dist)).pipe(rename({
            suffix: '.min'
        })).pipe(uglify()).pipe(gulp.dest(Config.js.dist));
    });
    /** 
     * �ϲ�����js�ļ�����ѹ������ 
     */
    gulp.task('js-concat', function () {
        return gulp.src(Config.js.src).pipe(jshint()).pipe(jshint.reporter('default')).pipe(concat(Config.js.build_name)).pipe(gulp.dest(Config.js.dist)).pipe(rename({
            suffix: '.min'
        })).pipe(uglify()).pipe(gulp.dest(Config.js.dist));
    });
    /** 
     * ͼƬ���� 
     */
    gulp.task('images', function () {
        return gulp.src(Config.img.src).pipe(imagemin({
            optimizationLevel: 3
            , progressive: true
            , interlaced: true
        })).pipe(gulp.dest(Config.img.dist));
    });
    gulp.task('build', ['html', 'css', 'sass', 'js', 'assets', 'images']);
}
module.exports = prod;