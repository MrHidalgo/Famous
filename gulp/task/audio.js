const gulp        = require('gulp');


/**
 *
 * @type {{src, dest, errorHandler}}
 */
const configPath  = require('../config/configPath');



/**
 * @description Gulp video - copy fonts to the dest folder.
 */
gulp.task('audio', function() {
  return gulp
    .src(configPath.src.audio + '/**.*')
      .pipe(gulp.dest(configPath.dest.audio));
});


/**
 * @description Gulp video watch - keeps track of changes in files.
 */
gulp.task('audio:watch', function() {
  gulp.watch(
    configPath.src.audio + '/**',
    ['audio']
  );
});
