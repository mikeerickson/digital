// MOCHA TASK
// =============================================================================

/*global require*/

import gulp    from 'gulp'
import msg     from 'gulp-messenger'
import mocha   from 'gulp-mocha'
import babel   from 'babel-core/register'
import config  from './gulp.config'

msg.init({showPipeFile: false, timestamp: true})

// using reporter `mocha-unfunk-reporter` to improve display of mocha output (this is optional)
gulp.task('mocha', function() {
	return gulp.src(config.tests.specs, {read: false})
		.pipe(mocha({
			reporter:  'mocha-unfunk-reporter',
			compilers: { js: babel }
		}));
})
