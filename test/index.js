'use strict'
var tape = require('tape')
var rawMoments = require('../index')

console.log(Object.keys(tape))


tape('single average', function(t) {

	t.comment('normal use')
		t.equal( rawMoments([0.5,0.5,0.5], -1), 2, 'negative exponents are valid')
		t.true( Math.abs(rawMoments([-1,-2,-3], 2) -14/3) < 0.000001, 'sum square valid')
		t.equal( rawMoments([-1,-2,-3], 3), -12, 'sum cube valid')

	t.comment('edge cases')
		t.equal( rawMoments([1,2,3]), 2, 'default exponent is 1')
		t.true( isNaN( rawMoments([], 3) ), 'empty samples have no average - NaN')

	t.end()
})


tape('multiple sums', function(t) {

	t.comment('normal use')
		t.deepEqual( rawMoments([-1,-2,-3,-4], Array(2)), [-2.5, 15/2], 'sum square valid')
		t.deepEqual( rawMoments([3, 2, 1, 0], Array(3)), [1.5, 3.5, 9], 'sum cube valid')

	t.comment('edge cases')
		t.true( isNaN( rawMoments([], Array(2))[1] ), 'empty samples return NaN')
		t.deepEqual( rawMoments([0,1,2], Array(0)), [], 'empty parameter should yield empty results')
		t.true( isNaN (rawMoments([null,'a',undefined], Array(2))[1] ), 'invalid samples should return NaN as sum')

	t.end()
})
