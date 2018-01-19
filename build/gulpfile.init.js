var gulp = require('gulp');
var mkdirp = require('mkdirp');
var Config = require('./gulpfile.config.js');
//======= gulp init ��ʼ����Ŀ�ṹ ===============
function init() {
    /** 
     * ��ʼ����Ŀ�ṹ
     */
    gulp.task('init', function () {
        var dirs = [Config.html.dir, Config.assets.dir, Config.css.dir, Config.sass.dir, Config.js.dir, Config.img.dir];
        dirs.forEach(dir => {
            mkdirp.sync(dir);
        });
    });
}
module.exports = init;