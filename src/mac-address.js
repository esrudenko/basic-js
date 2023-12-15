const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let hexadecimal = '0123456789ABCDEFabcdef';
  let nArr = n.split('-');

  if (nArr.length !== 6) {
    return false;
  }
  for (let i = 0; i < nArr.length; i++) {
    if (nArr[i].length !== 2) {
      return false;
    } else {
      if (!(hexadecimal.includes(nArr[i][0]) && hexadecimal.includes(nArr[i][1]))) {
        return false;
      } else {
        return true;
      }
    }
  }
}
module.exports = {
  isMAC48Address
};
