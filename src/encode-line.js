const { NotImplementedError } = require("../lib");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let result = "";
  let num = 1;
  if (str.length) {
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      num++;
    } else {
      num === 1
        ? (result += str[i - 1])
        : (result += `${num}${str[i - 1]}`);
      num = 1;
    }
  }
  num === 1 ? result += str[str.length - 1] : (result += `${num}${str[str.length - 1]}`);
  }
  return result;
}

module.exports = {
  encodeLine,
};
