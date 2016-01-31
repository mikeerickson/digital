/* global require*/

'use strict';

import gulp from 'gulp';
import config from './gulp.config';
import todo from 'gulp-todo';
import msg from 'gulp-messenger';

msg.init({timestamp: true, logToFile: false});

gulp.task('todo', () => {
	return gulp.src(config.todo.src)
		.pipe(todo())
		.pipe(gulp.dest('./'))
		.pipe(msg.flush.success('*** ./TODO.MD File Updated *** '));
});

gulp.task('todo:json', () => {
	gulp.src(config.todo.src)
		.pipe(todo({
			fileName: 'todo.json',
			reporter: 'json'
		}))
		.pipe(msg.flush.success('*** ./todo.json File Updated *** '))
		.pipe(gulp.dest('./'));
});

// TODO: Why is this task not creating the todo.json file as it should
// output once in markdown and then output a json file as well
gulp.task('todo:reporters', () => {
	gulp.src(config.todo.src)
		.pipe(todo())
		.pipe(gulp.dest('./'))
		.pipe(todo.reporter('json', {fileName: 'todo.json'}))
		.pipe(msg.flush.success('*** ./TODO.MD and ./todo.json Files Updated *** '))
		.pipe(gulp.dest('./'));
});
