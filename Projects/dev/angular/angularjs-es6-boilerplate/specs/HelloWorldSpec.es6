// HELLO WORLD
// =============================================================================

/*
 $ mocha --compilers js:babel-core/register specs
 */

import chai from 'chai'

let expect = chai.expect
let should = chai.should

describe('Mocha ES6 Test', function() {

	it('should pass', (done) => {
		expect(true).to.be.true
	done()
})

	it('should perform some math operations', (done) => {
		expect(36).to.equal(6*6)
	done()
})

	it('should perform some more math operations', (done) => {
		expect(9).to.equal(81/9)
	done()
})

	it('should fail first', (done) =>{
		expect(true).to.be.true;
	done()
})

});

