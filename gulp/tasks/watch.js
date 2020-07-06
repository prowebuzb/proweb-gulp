module.exports = () =>
    $.gulp.task('watch', () => { /* Ставим задачу gulp`у куда смотреть */
        for (const key in $.path.watch) { /* запускаем перебор объекта $.path.watch */
            const pathWatch = $.path.watch[key]            
            $.gulp.watch(pathWatch, $.gulp.series(key)) /* Устанавливаем просмотр за файлами */
        }
    })