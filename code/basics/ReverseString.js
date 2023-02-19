// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse1(str) {
  // reduce: condense 1 arr to 1 str
  str.split("").reduce();
  return str.split("").reduce((reversed, char) => char + reversed, "");
}

function reverse2(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

module.exports = { reverse1, reverse2 };
