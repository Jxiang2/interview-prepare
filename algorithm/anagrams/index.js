// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const lowerStringAObj = {};
  const lowerStringBObj = {};
  const lowerStringA = stringA.replace(/[^\w]/g, "").toLowerCase();
  const lowerStringB = stringB.replace(/[^\w]/g, "").toLowerCase();
  lowerStringA.split("").forEach((char) => {
    char in lowerStringAObj
      ? (lowerStringAObj[char] += 1)
      : (lowerStringAObj[char] = 1);
  });
  lowerStringB.split("").forEach((char) => {
    char in lowerStringBObj
      ? (lowerStringBObj[char] += 1)
      : (lowerStringBObj[char] = 1);
  });
  // 2 steps to comapre objects 1. compare lenght 2. compare each key-var pairs using one obj as base
  if (
    Object.keys(lowerStringAObj).length !== Object.keys(lowerStringBObj).length
  ) {
    return false;
  }
  for (let char in lowerStringAObj) {
    if (lowerStringAObj[char] !== lowerStringBObj[char]) return false;
  }
  return true;
}

module.exports = anagrams;

// tip RegExp /[^\w]/g: remove whitespace and punctuations

// const cleanString = (str) => {
//     return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
// }

// function anagrams(stringA, stringB) {
//     return cleanString(stringA) === cleanString(stringB)
// }
