const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let count = 0;

  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      count++;
    }
  }

  if (count > 1) {
    let arr = email.split('@');
    return (arr[arr.length - 1]);
  } else {
    let arr = email.split('.');
    let firstElementArr = arr[0].split('@');
    return (firstElementArr[1] + '.' + arr[1]);
  }
}

module.exports = {
  getEmailDomain
};
