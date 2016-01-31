// GULP CONFIGURATION
// =============================================================================

"use strict";

module.exports = {

	scripts: {
		src:  ['./src/**/*.{js,jsx,es6}'],
		dest: './dist'
	},

	todo: {
		src: ['./src/**/*.*','./specs/**/*.*']
	},

	tests: {
		specs: ['./specs/**/*Spec.{js,es6}']
	},

	lint: {
		src:  ['./src/**/*.{js,jsx,es6}','./src/**/*.{js,es6}']
	}

}
