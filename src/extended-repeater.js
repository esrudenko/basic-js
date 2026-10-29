const { NotImplementedError } = require("../lib");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const repeatTimes = options.repeatTimes ?? 1;
  const additionRepeatTimes = options.additionRepeatTimes ?? 1;

  const string = String(str === undefined ? '' : str);
  const stringAddition = String(options.addition === undefined ? '' : options.addition);

  const separator = options.separator ?? '+';
  const separatorAddition = options.additionSeparator ?? '|';

  let result = "";
  let addition = "";
  for (let i = 0; i < additionRepeatTimes; i++) {
    if (i !== additionRepeatTimes - 1) {
      addition += stringAddition + separatorAddition;
    } else {
      addition += stringAddition;
    }
  }
  for (let j = 0; j < repeatTimes; j++) {
    if (j !== repeatTimes - 1) {
      result += string + addition + separator;
    } else {
      result += string + addition;
    }
  }
  return result;
}

module.exports = {
  repeater,
};
