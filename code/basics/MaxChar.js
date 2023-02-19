// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charsObj = {};
  str
    .split("")
    .forEach((element) =>
      element in charsObj ? (charsObj[element] += 1) : (charsObj[element] = 1),
    );
  let max = 0;
  let maxChar = "";
  for (let char in charsObj) {
    if (charsObj[char] > max) {
      max = charsObj[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
