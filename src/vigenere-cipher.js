const { NotImplementedError } = require("../lib");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    const text = message.toUpperCase();
    const keyword = key.toUpperCase();
    let keyIndex = 0;
    let result = "";

    for (let i = 0; i < text.length; i++) {
      if (text[i] < "A" || text[i] > "Z") {
        result += text[i];
        continue;
      }

      const letterPosition = text[i].charCodeAt(0) - 65;
      const keyPosition = keyword[keyIndex % keyword.length].charCodeAt(0) - 65;
      const newPosition = (letterPosition + keyPosition) % 26;
      const newLetter = String.fromCharCode(65 + newPosition);
      result += newLetter;
      keyIndex++;
    }
    return this.direct ? result : result.split("").reverse().join("");
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    const text = message.toUpperCase();
    const keyword = key.toUpperCase();
    let keyIndex = 0;
    let result = "";

    for (let i = 0; i < text.length; i++) {
      if (text[i] < "A" || text[i] > "Z") {
        result += text[i];
        continue;
      }

      const letterPosition = text[i].charCodeAt(0) - 65;
      const keyPosition = keyword[keyIndex % keyword.length].charCodeAt(0) - 65;
      const newPosition = (letterPosition - keyPosition + 26) % 26;
      const newLetter = String.fromCharCode(65 + newPosition);
      result += newLetter;
      keyIndex++;
    }
    return this.direct ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
