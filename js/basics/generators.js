// Generator functions behave differently from regular ones.
// When such function is called, it doesn’t run its code.
// Instead it returns a special object, called GENERATOR OBJECT, to manage the execution.
function* generateSequence0() {
  yield 1;
  yield 2;
  return 3;
}
let generator0 = generateSequence0();
console.log(generator0);

// The main method of a generator is next().
// When called, it runs the execution until the nearest yield <value> statement
// Then the function execution pauses, and the yielded value is returned to the outer code.
// The result of next() is always an object with two properties: {value: any, done: bool}
// return means done === true
const one = generator0.next();
console.log(one);
const two = generator0.next();
console.log(two);
const doneThree = generator0.next();
console.log(doneThree);
const undefinedFour = generator0.next();
console.log(undefinedFour);

// Generator objects are ITERABLE, we can loop over their values using for..of:
// But for..of ignore the last value, when done: true
// So by doing for..of, we can't use return for the last value, use yield
function* generateSequence1() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  return 5;
}
let generator1 = generateSequence1();
for (let value of generator1) {
  console.log(value);
}

// Looped generator
function* generateLoopSequence0(start, end) {
  for (let i = start; i <= end; i++) {
    if (i === end) {
      return i;
    }
    yield i;
  }
}
let loopGenerator = generateLoopSequence0(1, 3);
console.log(loopGenerator.next());
console.log(loopGenerator.next());
console.log(loopGenerator.next());
console.log(loopGenerator.next());

// example
// First, digits 0..9 (with character codes 48…57),
// Followed by uppercase alphabet letters A..Z (character codes 65…90)
// Followed by lowercase alphabet letters a..z (character codes 97…122)
// There’s a special yield* syntax to “embed” (compose) one generator into another
function* generateCodeSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}
function* generateCodes() {
  // 0..9
  yield* generateCodeSequence(48, 57); // <==> for (let i = 48; i <= 57; i++) yield i;
  // A..Z
  yield* generateCodeSequence(65, 90); // <==> for (let i = 65; i <= 90; i++) yield i;
  // a..z
  yield* generateCodeSequence(97, 122); // <==> for (let i = 97; i <= 122; i++) yield i;
}
let str = "";
for (let code of generateCodes()) {
  str += String.fromCharCode(code);
}
console.log(str); // 0..9A..Za..z

// “yield” is a two-way street:
// It not only returns the result to the outside,
// But also can pass the value inside the generator.
function* gen() {
  let ask1 = yield "2 + 2 = ?";
  console.log(ask1); // 4
  let ask2 = yield "3 * 3 = ?";
  console.log(ask2); // 9
  return ask2;
}
let genObj = gen();
console.log(genObj.next().value); // "2 + 2 = ?"
console.log(genObj.next(4).value); // "3 * 3 = ?"
console.log(genObj.next(9).done); // true

// It’s like a ping-pong game. Each "next(value)"" (excluding the first one) passes
// a value into the generator, that becomes the result of the current "yield",
// and then gets back the result of the next "yield".
