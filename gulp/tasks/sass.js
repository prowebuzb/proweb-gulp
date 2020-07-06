const sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    groupCssMediaQueries = require('gulp-group-css-media-queries'),
    rename = require('gulp-rename')
    module.exports = () =>
        $.gulp.task('style', () => /* Ставим задачу gulp`у счто сделать с sass */
            $.gulp.src($.path.src.style) /* Откуда взять файлы */
                .pipe(sourcemaps.init()) /* pipe - метод nodejs который подключает определенные зависимости | создаем файлы sourcemaps (.map) */
                .pipe(sass({ outputStyle: 'expanded' })) /* Создаем файл css не сжатый */
                .pipe(autoprefixer()) /* Добавляем префиксы */
                .pipe(groupCssMediaQueries()) /* Перемещаем все медиа запросы в конец файла */
                // .pipe($.gp.sourcemaps.write()) /* Записываем все в .map  */
                .pipe(sass({ outputStyle: 'compressed' })) /* Сжимаем css */
                .pipe(rename('main.min.css')) /* Переименновываем файл */
                // .pipe($.gp.sourcemaps.write()) /* Записываем все в .map  */
                .pipe($.gulp.dest($.path.build.style)).on('end', $.bs.reload) /* Переносим все в build и когда все сработает перезагружаем BS */
        );

