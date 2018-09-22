const gulp    = require('gulp'),
  runSequence = require('run-sequence');


/**
 * @description Gulp build - build source files.
 */
gulp.task("build", function(callback) {
  runSequence(
    'clean',
    'scss',
    'pug',
    'js',
    'fonts',
    'video',
    'spritePNG',
    'spriteSVG',
    'vendorScript',
    'vendorStyle',
    'vendorFont',
    'list-pages',
    callback
  );
});