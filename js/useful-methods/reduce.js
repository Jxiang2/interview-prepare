const array1 = [1, 2, 3, 4]

const initialPrevValue = 0

const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => {
    console.log("prev: ", previousValue)
    console.log("cur: ", currentValue)
    return previousValue + currentValue
  },
  initialPrevValue
)

console.log(sumWithInitial)
// expected output: 10

// prev 0  1  3  6
// cur  1  2  3  4
// +    1  3  6  10
