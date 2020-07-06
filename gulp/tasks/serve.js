module.exports = function() {
    $.gulp.task('serve', () => { /* Ставим задачу gulp`у */
        $.bs.init({ /* Запускаем BS */
            server: { /* Конечный результат файлов */
                baseDir: $.path.serverDir
            }
        })
    })
}