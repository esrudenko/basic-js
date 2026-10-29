const { NotImplementedError } = require("../lib");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let output = 0;
  const nStr = String(n);
  for (let i = 0; i < nStr.length; i++) {
    let num;
    num = +(nStr.slice(0, i) + nStr.slice(i + 1));
    if (num > output) {
      output = num;
    }
  }
  return output;
}

module.exports = {
  deleteDigit,
};
