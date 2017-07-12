var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../config');

gulp.task('watch', function () {
	gulp.watch([config.concatcss.src, config.inliner.watch], ['build']);
	gulp.watch(config.images.src, ['images']);
});

gulp.task('build', function(cb) {
	runSequence(
		'concatcss',
		'inliner',
		cb
	);
});
