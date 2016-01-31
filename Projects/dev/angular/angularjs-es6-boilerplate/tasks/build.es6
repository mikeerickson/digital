// BUILD TASK
// =============================================================================

import gulp   from 'gulp';
import babel  from 'gulp-babel';
import config from './gulp.config.js';
import msg    from 'gulp-messenger';

// Build scripts, dont worry about the rest of the stuff
gulp.task('build:scripts', () => {
	return gulp.src(config.scripts.src)
		.pipe(babel())
		.pipe(msg.flush.success('*** Building Scripts ***'))
		.pipe(gulp.dest(config.scripts.dest));
});

// Alias, build all the things (including linting and specs)
gulp.task('build',['eslint','mocha','build:scripts']);
