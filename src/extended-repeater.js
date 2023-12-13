const { NotImplementedError } = require('../extensions/index.js');

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

  let sliceAddition;
  let sliceStr;
  let additionStr;

  if (options.addition === undefined) {
    additionStr = '';
  } else {
    if (options.additionSeparator === undefined) {
      options.additionSeparator = '|';
    }
    sliceAddition = (options.additionSeparator).length;
    additionStr = ((options.addition + options.additionSeparator).repeat(options.additionRepeatTimes || 1)).slice(0, -sliceAddition);
  }

  if (options.separator === undefined) {
    options.separator = '+'
  }
  sliceStr = (options.separator).length;
  return ((str + additionStr + options.separator).repeat(options.repeatTimes || 1).slice(0, -sliceStr));
}

module.exports = {
  repeater
};
