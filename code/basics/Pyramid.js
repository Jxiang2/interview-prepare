// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  ' row: 0; numberOf#: 1
//       ' ### ' row: 1; numberOf#: 3
//       '#####' row: 2; numberOf#: 5
//   pyramid(4)
//       '___#___'
//       '__###__'
//       '_#####_'
//       '#######'

const pyramid = (n, row = 0, stair = "") => {
  if (row === n) return;

  if (stair.length === 2 * n - 1) {
    console.log(stair);
    pyramid(n, row + 1);
    return;
  }

  if (stair.length >= n - 1 - row && stair.length <= n - 1 + row) {
    stair += "#";
  } else {
    stair += " ";
  }

  pyramid(n, row, stair);
};

pyramid(10);

module.exports = pyramid;
