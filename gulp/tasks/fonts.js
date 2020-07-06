module.exports = () =>
  $.gulp.task('fonts', () => /* Ставим задачу gulp`у счто сделать с fonts */
    $.gulp.src($.path.src.fonts) /* Откуда взять файлы */
      .pipe($.gulp.dest($.path.build.fonts)).on('end', $.bs.reload)) /* Переносим все в build и когда все сработает перезагружаем BS */
 