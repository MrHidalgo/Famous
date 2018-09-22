const gulp        = require('gulp');


/**
 *
 * @type {{src, dest, errorHandler}}
 */
const configPath  = require('../config/configPath');



/**
 * @description Gulp video - copy fonts to the dest folder.
 */
gulp.task('video', function() {
  return gulp
    .src(configPath.src.video + '/**.*')
      .pipe(gulp.dest(configPath.dest.video));
});


/**
 * @description Gulp video watch - keeps track of changes in files.
 */
gulp.task('video:watch', function() {
  gulp.watch(
    configPath.src.video + '/**',
    ['video']
  );
});
