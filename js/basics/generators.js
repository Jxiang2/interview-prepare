// basic example
function* simpleGenerator() {
  console.log("before one")
  yield 1
  console.log("after one")
  console.log("before two")
  yield 2
  console.log("after two")
  console.log("before three")
  yield 3
  console.log("after three")
}

// generator function create a generator object when we call it
// when we call .next() at the first time, it excutes the first yiled
const generatorObj = simpleGenerator()

const val1 = generatorObj.next()
console.log(val1)
const val2 = generatorObj.next()
console.log(val2)
const val3 = generatorObj.next()
console.log(val3)
const val4 = generatorObj.next()
console.log(val4)

console.log("------------------------------")

// usecase
function* iterator(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("before yield")
    yield arr[i]
    console.log("after yield")
  }
}

const arrIterator = iterator([1, 3, 5])
console.log(arrIterator.next())
console.log(arrIterator.next())
console.log(arrIterator.next())

console.log("------------------------------")

// advanced usecase
// yield xxx returns the .next(xxx)
function* generateId() {
  let id = 1

  while (true) {
    const increment = yield id
    if (increment) {
      id += increment
    } else {
      id += 1
    }
  }
}

const idGenerator = generateId()
console.log(idGenerator.next())
console.log(idGenerator.next(4))
console.log(idGenerator.next())
console.log(idGenerator.next())
