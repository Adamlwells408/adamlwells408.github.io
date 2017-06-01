'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var imageResize = require('gulp-image-resize');

gulp.task('sass', function () {
  return gulp.src('./assets/sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('resizeImages', function() {
	gulp.src('assets/images/*.jpg')
		.pipe(imageResize({
			percentage : 200,
			upscale : true,
			interlace : true,
			quality : 0.3
		}))
		.pipe(gulp.dest('test-images'));
});