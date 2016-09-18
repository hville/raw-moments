var powerSums = require('power-sums')

module.exports = rawMoments

/**
 * average or averages of values raised to one or more power
 * @param   {Array}  arr Samples
 * @param   {Number|Array} [pow=1]   exponent or target array with length of max exponent
 * @returns {Number} sum
 */
function rawMoments (arr, pow) {
	if (pow === undefined) return powerSums(arr) / arr.length
	if (pow.constructor === Number) return powerSums(arr, pow) / arr.length
	if (Array.isArray(pow)) {
		powerSums(arr, pow)
		for (var k = 0; k < pow.length; ++k) pow[k] /= arr.length
		return pow
	}
	throw Error('rawMoments called with invalid argument')
}
