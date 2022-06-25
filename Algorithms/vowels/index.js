// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let count = 0
  for (let char of str.toLowerCase())
    ['a', 'e', 'i', 'o', 'u'].includes(char) ? count += 1 : null
  return count
}

module.exports = vowels

// function vowels(str) {
//     const matchedAry = str.match(/[aeiou]/gi)
//     return matchedAry ? matchedAry.length : 0
// }