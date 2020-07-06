const include = require('gulp-include'),
  babel = require('gulp-babel')
module.exports = () => 
    $.gulp.task('js', () => /* Ставим задачу gulp`у счто сделать с js */
    $.gulp.src($.path.src.js) /* Откуда взять файлы */
      .pipe(include()) /* Подключаем плагин include чтобы мы могли встраевать файлы в сам JS */
      .pipe(babel()) /* Подключаем babel чтобы с переделывать наш js */
      .pipe($.gulp.dest($.path.build.js)).on('end', $.bs.reload)) /* Переносим все в build и когда все сработает перезагружаем BS */
  