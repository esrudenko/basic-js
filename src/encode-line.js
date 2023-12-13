const { NotImplementedError } = require('../extensions/index.js');

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
  let sum = 1;
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      sum++;
    } else if (str[i] !== str[i + 1]) {
      arr.push(`${sum}${str[i]}`);
      sum = 1;
    }
  }

  let result = [];
  arr.forEach((element) => {
    if (element.includes("1")) {
      result.push(element.slice(1));
    } else {
      result.push(element)
    };
  })
  return result.join('');
}

module.exports = {
  encodeLine
};
