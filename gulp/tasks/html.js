const include = require('gulp-include')
module.exports = () => 
    $.gulp.task('html', () => 
        $.gulp.src($.path.src.html)
            .pipe(include())
            .pipe($.gulp.dest($.path.build.html)).on('end', $.bs.reload))