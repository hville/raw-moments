'use strict'
var c = require('cotest')
var rawMoments = require('./index')

c('single average - normal use', function () {
	c('===', rawMoments([0.5, 0.5, 0.5], -1), 2)
	c('<', Math.abs(rawMoments([-1, -2, -3], 2) - 14 / 3), 0.000001)
	c('===', rawMoments([-1, -2, -3], 3), -12)
})
c('single average - edge cases', function () {
	c('===', rawMoments([1, 2, 3]), 2)
	c('===', isNaN(rawMoments([], 3)), true, 'empty samples have no average - NaN')
})
c('multiple sums - normal use', function () {
	c('{==}', rawMoments([-1, -2, -3, -4], Array(2)), [-2.5, 15 / 2], 'sum square valid')
	c('{==}', rawMoments([3, 2, 1, 0], Array(3)), [1.5, 3.5, 9], 'sum cube valid')
})
c('multiple sums - edge cases', function () {
	c('===', isNaN(rawMoments([], Array(2))[1]), true, 'empty samples return NaN')
	c('{==}', rawMoments([0, 1, 2], Array(0)), [], 'empty parameter should yield empty results')
	c('===', isNaN(rawMoments([null, 'a', undefined], Array(2))[1]), true, 'invalid samples should return NaN as sum')
})
