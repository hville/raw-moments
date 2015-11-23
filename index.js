'use strict'
var powerSums = require('power-sums')

/**
 * sum or sums of values raised to one or more exponent
 * @param   {Array}  arr Samples
 * @param   {Number|Array} [N=1]   exponent or target array with length of max exponent
 * @returns {Number} sum
 */
function rawMoments (arr, ks) {
  var qty = arr.length

  if (ks === undefined) ks = 1

  // is N is an array, return an array of averages E[xi^ki]
  if (Array.isArray(ks)) {
    powerSums(arr, ks)
    for (var k = 0; k < ks.length; k++) ks[k] /= qty
    return ks
  }

  // if not an array, return a single E[xi^k]
  if (typeof ks === 'number') return powerSums(arr, ks) / qty
}

module.exports = rawMoments
