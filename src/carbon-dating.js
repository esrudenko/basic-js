const { NotImplementedError } = require("../lib");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const sampleActivityNumber = Number(sampleActivity);
  if (typeof(sampleActivity) !== "string" ||
    Number.isNaN(sampleActivityNumber) ||
    sampleActivity === "" ||
    sampleActivityNumber <= 0 ||
    sampleActivityNumber > MODERN_ACTIVITY
  ) {
    return false;
  } else {
    return Math.ceil(
      HALF_LIFE_PERIOD *
        (Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / 0.693),
    );
  }
}

module.exports = {
  dateSample,
};
