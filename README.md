<!-- markdownlint-disable MD004 MD007 MD010 MD041 MD022 MD024 MD032 -->
# raw-moments

• [Introduction](#Introduction) • [Limitations](#Limitations) • [Usage](#Usage)  • [Test](#test) • [License](#License) •

## Introduction

Returns the average(s) of values raised to one or more exponents: *E(x,k) = ∑(x^k)/n*

If a sample array and an exponent are provided, returns a single raw moment (origin moment)

*f([A],b) = ∑(a^b) / n*

If a sample array and an array of length N are provided, returns the same array filled moments 1 to N.

*f([A], [B]) = [ ∑(a)/n, ∑(a^2)/n, ∑(a^3), ...]*

## Limitations

While Kahan summation is used internally to reduce floating point errors,
[care must be taken](https://en.wikipedia.org/wiki/Algorithms_for_calculating_variance)
if different sums are to be substracted for variance or skew calculations.

For large data sets that are far from the origin (*ie 0 would fall outside the range of values*)
the significant order of magnitude between terms will cause significant errors during substractions.

## Usage

### single power

With a single exponent, `rawMoments(samples, k)` return the single *k^th* raw moment (aka origin moment).

```javascript
var rawMoments = require('raw-moments')
rawMoments([0, 1, 2], 2)    // return (0 + 1^2 + 2^2)/3 = 5/3
rawMoments([1/4, 1/2, 1], -1)    // return (4 + 2 + 1)/3 = 5/3
```

### multiple powers

The actual use case is to obtain multiple *k^th order* raw moments in a single pass.
The maximum order is the length of the parameter array and the results will be inserted in this Array before it is returned.

```javascript
var rawMoments = require('raw-moments')
rawMoments([0,1,2], Array(4))    // returns [1, 5/3, 3, 17/3]
```

Values in the second parameter array are replaced with the actual result and the same array is returned

```javascript
var rawMoments = require('raw-moments')
var results = [0, 0, 99]    //initial values not important, only the array length
rawMoments([2,2], results)    // results = [4, 8, 16]
```

### edge cases

```javascript
var rawMoments = require('raw-moments')
rawMoments([], Array(3))    // returns [NaN, NaN, NaN]
rawMoments([0,1,2])    // returns the simple average (5/3)
rawMoments([0,1,2], [])    // returns the empty set []
```

## Test

In node, from the root folder type `npm test`.
(test dependency is not included with the package and must be obtained from the git repository or npm)

## License

Released under the [MIT License](http://www.opensource.org/licenses/MIT)





























## Test

In node, from the root folder type `npm test`.
(test is not included with the package and must be obtained from the git repository)

## License

Released under the [MIT License](http://www.opensource.org/licenses/MIT)




















