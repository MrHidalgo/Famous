const gulp = require('gulp');


/**
 * @description Gulp main watch - keeps track of changes in files.
 */
gulp.task('watch',
  [
    'scss:watch',
    'pug:watch',
    'js:watch',
    'img:watch',
    'fonts:watch',
    'video:watch',
    'audio:watch',
    'spritePNG:watch',
    'spriteSVG:watch',
    'vendorScript:watch',
    'vendorStyle:watch',
    'list-pages:watch'
  ]
);
