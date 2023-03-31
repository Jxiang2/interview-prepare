// 1. in TS, more specific datatype is the child of less specific datatype
type Check<Child, Parent> = Child extends Parent ? true : false;

type MoreSpecificUnion = 1 | 2; // child, mroe specific
type LessSpecificUnion = 1 | 2 | 3; // parent, less specific
const flag1: Check<MoreSpecificUnion, LessSpecificUnion> = true;

type MoreSpecificObj = { a: number; b: number; c: number }; // child
type LessSpecificObj = { a: number; c: number }; // parent
const flag2: Check<MoreSpecificObj, LessSpecificObj> = true;

// 2. 协变
interface Person1 {
  name: string;
}
interface Student1 extends Person1 {
  age: number;
}

let person: Person1 = { name: "beyond" }; // parent
const student: Student1 = { name: "beyond", age: 12 }; // child

person = student; // child student can be assigned to parent person (协变)
// student = person; // parent person can't be assigned to child student

console.log(person);

// 3. 逆变
// 3.1
interface Parent {
  a: 1;
}
interface Child extends Parent {
  b: 2;
}

type FunP = (arg: Parent) => any;
type FunC = (arg: Child) => any;

const funp: FunP = function (arg) {
  return arg.a;
};
let func: FunC = function (arg) {
  return arg.a || arg.b;
};

func = funp; // func tkaes {a: 1, b: 2}, funp takes {a: 1}, funp (parent) can be assigned to func (child)
// funp = func; // not working, funp has no way to deal with arg.b comming from func's argument

// 3.2
interface MyFunc {
  (a: number, b: number): number;
}

// x can be assigned to MyFunc.a, y can be assigned to MyFunc.b ✅
const add: MyFunc = function (x, y) {
  return x + y;
};

// a can be assigned to MyFunc.a ✅
const subtract: MyFunc = function (a) {
  return a - 0;
};

// a can be assigned to MyFunc.a, b can be assigned to MyFunc.b, c is not assignable in MyFunc ❌
// let chatGptSubtract: MyFunc = function (a, b, c) {
//   return a - b;
// };

console.log(func({ a: 1, b: 2 }));

// 逆变 in practice
type UnionToIntersection<U> = (U extends U ? (a: U) => any : never) extends (
  a: infer R,
) => any
  ? R
  : never;
type Copy<I> = {
  [K in keyof I]: I[K];
};
type IntersectionObjects = UnionToIntersection<{ a: 1 } | { b: 3 }>;
type ResultObject = Copy<IntersectionObjects>;
