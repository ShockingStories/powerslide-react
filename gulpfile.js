var gulp = require('gulp');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var react = require('gulp-react');
var sourcemaps = require('gulp-sourcemaps');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
 
gulp.task('js', function () {
  return gulp.src([
      '!js/all.js',
      'js/src/*.js'
    ])
    .pipe(sourcemaps.init())
      .pipe(concat('js/all.js'))
      .pipe(jshint())
      .pipe(stripDebug())
      .pipe(react())
      .pipe(uglify(true))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('.'));
});

gulp.task('watch', ['js'], function () {
  gulp.watch('js/src/*.js', ['js']);
});
