const { NotImplementedError } = require('../lib');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const digits = String(n).split('');
  let sum = 0;
  digits.forEach((digit) => sum += Number(digit));

  while (String(sum).length > 1) {
    const digits = String(sum).split('');
    sum = 0;

    digits.forEach((digit) => {
    sum += Number(digit);
    });
  }
  return sum;
}

module.exports = {
  getSumOfDigits
};
