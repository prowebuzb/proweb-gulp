module.exports = () =>
  $.gulp.task('img', () => /* Ставим задачу gulp`у счто сделать с img */
    $.gulp.src($.path.src.img) /* Откуда взять файлы */
      .pipe($.gulp.dest($.path.build.img)).on('end', $.bs.reload))  /* Переносим все в build и когда все сработает перезагружаем BS */
