var SRC_DIR = './src/';     // Դ�ļ�Ŀ¼  
var DIST_DIR = './dist/';   // �ļ�������ŵ�Ŀ¼  
var DIST_FILES = DIST_DIR + '**'; // Ŀ��·���µ������ļ�  

var Config = {
    src: SRC_DIR,
    dist: DIST_DIR,
    dist_files: DIST_FILES,
    html: {  
        dir: SRC_DIR,
        src: SRC_DIR + '*.html',  
        dist: DIST_DIR  
    },  
    assets: {  
        dir: SRC_DIR + 'assets',
        src: SRC_DIR + 'assets/**/*',            // assetsĿ¼��./src/assets  
        dist: DIST_DIR + 'assets'                // assets�ļ�build���ŵ�Ŀ¼��./dist/assets  
    },  
    css: {  
        dir: SRC_DIR + 'css',
        src: SRC_DIR + 'css/**/*.css',           // CSSĿ¼��./src/css/  
        dist: DIST_DIR + 'css'                   // CSS�ļ�build���ŵ�Ŀ¼��./dist/css  
    },  
    sass: {  
        dir: SRC_DIR + 'sass',
        src: SRC_DIR + 'sass/**/*.scss',         // SASSĿ¼��./src/sass/  
        dist: DIST_DIR + 'css'                   // SASS�ļ�����CSS���ŵ�Ŀ¼��./dist/css  
    },  
    js: {  
        dir: SRC_DIR + 'js',
        src: SRC_DIR + 'js/**/*.js',             // JSĿ¼��./src/js/  
        dist: DIST_DIR + 'js',                   // JS�ļ�build���ŵ�Ŀ¼��./dist/js  
        build_name: 'build.js'                   // �ϲ����js���ļ���  
    },  
    img: {  
        dir: SRC_DIR + 'images',
        src: SRC_DIR + 'images/**/*',            // imagesĿ¼��./src/images/  
        dist: DIST_DIR + 'images'                // images�ļ�build���ŵ�Ŀ¼��./dist/images  
    }  
};

module.exports = Config;