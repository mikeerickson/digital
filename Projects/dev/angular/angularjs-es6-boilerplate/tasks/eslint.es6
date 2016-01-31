// BABELIFY TASK
// =============================================================================

import gulp    from 'gulp'
import msg     from 'gulp-messenger'
import eslint  from 'gulp-eslint'
import config  from './gulp.config'

msg.init({showPipeFile: false, timestamp: true})

gulp.task('eslint', () => {
	return gulp.src(config.lint.src)
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError())
		.pipe(msg.flush.note('*** Linting Scripts [babel-eslint]: ' + config.lint.src));
});

gulp.task('lint', ['eslint']);
