const { NotImplementedError } = require('../extensions/index.js');

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
  let arr = [];
  let str = n.toString();

  for (let number of str) {
    arr.push(Number(str.replace(number, '')));
  }
  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
