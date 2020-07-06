// создаем ключ $ в глобальном объекте global сомого node js 
const   fs      = require('fs'),
        path    = require('path')
        
try {

    const readDir = fs.readdirSync('./');
    
    if(readDir.indexOf('app') === -1) {
        fs.mkdirSync('./app/src/style', {recursive: true})
        fs.mkdirSync('./app/src/style', {recursive: true})
        fs.mkdirSync('./app/src/script', {recursive: true})
        fs.mkdirSync('./app/src/fonts', {recursive: true})
        fs.mkdirSync('./app/src/images', {recursive: true})
        fs.mkdirSync('./app/src/view', {recursive: true})
        fs.writeFileSync('./app/src/index.html', '')
        fs.writeFileSync('./app/src/style/main.scss', '')
        fs.writeFileSync('./app/src/script/common.js', '')
    }
    console.info('Gulp starting');
    
} catch(err) {
    console.error(err);
}

    // создаем ключ $ в глобальном объекте global сомого node js 
global.$ = {
    // require() - метод подключающий плагины
    gulp:           require('gulp'),
    /* gulp-load-plugins - запускает все плагины связаны с gulp */
    bs:             require('browser-sync').create(), 
    /* browser-sync - проверяет файлы и запускает плагины */
    path: { /* path - подключаем пути работы gulp`a */
        tasks:      require('./gulp/config/tasks'), /* Отдает данные в ввиде массива */
        /* tasks - подключаем файл задачь */
        serverDir:  './app/build',
        /* serverDir - папка конечного результата. Будет создаваться самостоятельно */
        src: {
            /* src - даем понимание что от куда подключать */
            html:   './app/src/*.html',
            /* *.html - подключает все html файлы из папки src  */
            style:  './app/src/style/*.*',
            /* Подключаем все файлы из папки styles с любым названием и любым расширением */
            js:     './app/src/script/common.js',
            /* подлючаем файл common.js */
            img:    './app/src/images/**/*.{png,jpg,gif}',
            /* 
            ** - Любая папка
            .{...} - разрешение только для этих форматов
            */
            fonts:   './app/src/fonts/**/**/*.*'
        },
        build: { /* Построенная версия   */
            html:   './app/build/',
            style:  './app/build/style/',
            js:     './app/build/script/',
            img:    './app/build/images/',
            fonts:  './app/build/fonts/'
        },
        watch: { /* Говорим за чем следить нужно */
            html:   ['./app/src/*.html', './app/src/view/**/*.html'],
            /* Говорим где нужно следить за HTML */
            style:  './app/src/style/**/*.*',
            /* Говорим где нужно следить за SCSS */
            js:     './app/src/script/**/*.*',
            /* Говорим где нужно следить за JS */
            img:    './app/src/images/**/*.{png,jpg,gif}',
            /* Говорим где нужно следить за IMAGES */
            fonts:  './app/scr/fonts/**/*.*'
            /* Говорим где нужно следить за FONTS */
        }
    }
}
$.path.tasks.forEach(taskPath => require(taskPath)());
/* Пробегаемся по массиву и запускаем все плагины */
$.gulp.task('default', $.gulp.series($.gulp.parallel('html', 'style', 'js', 'img', 'fonts', 'watch', 'serve')))
/* Стами задачу gulp`у что делать по умолчанию */
$.gulp.task('build',   $.gulp.series($.gulp.parallel('html', 'style', 'js', 'img', 'fonts')))
/* Ставим задачу для Построенной версии  */
