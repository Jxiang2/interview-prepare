// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// 1234 -> 0 + 1234%10=4 -> 40 + 123%10=3 -> 43 + 12%10=2 -> 432 + 1%10=1 -> 4321
function reverseInt1(n) {
  let reversedInt = 0;
  while (n != 0) {
    reversedInt = reversedInt * 10 + (n % 10);
    n = parseInt(n / 10);
  }
  return reversedInt;
}

function reverseInt2(n) {
  const reversedInt = parseInt(n.toString().split("").reverse().join(""));
  return reversedInt * Math.sign(n);
}

module.exports = { reverseInt1, reverseInt2 };
