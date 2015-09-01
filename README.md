# raw-moments

1. [Introduction](#introduction)
1. [Installation](#installation)
1. [Usage](#usage)
1. [Test](#test)
1. [License](#license)



## Introduction

Returns the average(s) of values raised to one or more exponents.

*E<sub>k</sub> = E[ X^k ]*



## Installation

In node, from the root of your project folder type `npm install --save raw-moments`.



## Usage

### single exponent

With a single exponent, `rawMoments(samples, k)` return the single *k<sup>th</sup>* raw moment.

		var rawMoments = require('raw-moments')
		rawMoments([0, 1, 2], 2)    // return (0 + 1^2 + 2^2)/3 = 5/3
		rawMoments([1/4, 1/2, 1], -1)    // return (4 + 2 + 1)/3 = 5/3


### multiple exponents

The actual use case is to obtain multiple *k<sup>th</sup> order* raw moments in a single pass for faster processing of large arrays.
The maximum order is the length of the parameter array and the results will be inserted in this Array before it is returned.

		var rawMoments = require('raw-moments')
		rawMoments([0,1,2], Array(4))    // returns [1, 5/3, 3, 17/3]

Values in the second parameter array will be replaced with the actual result.

		var rawMoments = require('raw-moments')
		var results = [0, 0, 99]    //initial values not important, only the array length
		rawMoments([2,2], results)    // results = [4, 8, 16]

### edge cases

		var rawMoments = require('raw-moments')
		rawMoments([], Array(3))    // returns [NaN, NaN, NaN]
		rawMoments([0,1,2])    // returns the simple average (5/3)
		rawMoments([0,1,2], [])    // returns the empty set []



## Test

In node, from the root folder type `npm test`.
(test is not included with the package and must be obtained from the git repository)



## License

Released under the [MIT License](http://www.opensource.org/licenses/MIT)
