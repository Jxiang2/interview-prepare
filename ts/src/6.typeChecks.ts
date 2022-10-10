// ✅ Use typeof for primitive data types
const myVar: string | number = "hello world";

console.log(typeof myVar); // 👉️ "string"

if (typeof myVar === "string") {
  console.log(myVar.toUpperCase()); // 👉️ "HELLO WORLD"
}

// ✅ Use instanceof for classes
class Person {}

const person = new Person();
console.log(person instanceof Person); // 👉️ true

const err = new Error("Something went wrong");
console.log(err instanceof Error); // 👉️ true

// ✅ Use Array.isArray to check if array
console.log(Array.isArray([1, 2, 3])); // 👉️ true

// ✅ Use customised type guard functions Interface Type Check
interface A {
  member: string;
}

function isInstanceOfA(obj: any): obj is A {
  return typeof (obj as A).member === "string";
}

const a = {
  member: ",me",
};

console.log(isInstanceOfA(a));

export { isInstanceOfA };
