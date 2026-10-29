const { NotImplementedError } = require("../lib");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let namesCharacter = "";
  if (!Array.isArray(members)) {
    return false;
  } else {
    members.forEach((member) => {
      if (typeof member === "string") {
        member = member.trim();
        if (member.length) {
          namesCharacter += member[0];
        }
      }
    });
  }
  return namesCharacter.toUpperCase().split("").sort().join("");
}

module.exports = {
  createDreamTeam,
};
