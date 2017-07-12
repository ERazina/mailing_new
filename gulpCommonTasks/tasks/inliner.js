var gulp = require('gulp');
var config  = require('../config').inliner;
var inlineCss = require('gulp-inline-css');
var fileinclude = require('gulp-file-include');
var htmlmin = require('gulp-html-minifier');
var notify = require("gulp-notify");
var plumber = require('gulp-plumber');

gulp.task('inliner', function() {
	return gulp.src(config.src)
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(inlineCss({
			removeStyleTags: false
		}))
		.pipe(htmlmin({collapseWhitespace: true, minifyCSS: true}))
		.pipe(gulp.dest(config.dest));
});
