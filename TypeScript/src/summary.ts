// extends & types example
interface Vector1D {
  x: number;
};

interface Vector2D {
  x: number,
  y: number;
}

type subTypeOf<T, U> = T extends U ? true : false;

const var1: subTypeOf<Vector2D, Vector1D> = true;
const var2: subTypeOf<Vector1D, Vector1D> = true;
const var3: subTypeOf<Vector1D, Vector2D> = false;


// dynamic interfaces/ objects
interface IDynamicObj {
  [index: string]: number;
}

const id1: IDynamicObj = {
  k1: 1,
  k2: 2,
  k3: 5,
  helloWord: 15
};
console.log(id1);

interface IOptionalObj {
  id: string,
  birthDate: Date;
  avatar?: string;
  tropies: string[];
};
const optionalObj: IOptionalObj = {
  id: "3d2ce32",
  birthDate: new Date(Date.now()),
  tropies: []
};
console.log(optionalObj);


// as keyword
interface newInterface {
  name: string;
  age: number;
}

let hello: newInterface;
hello = {} as newInterface;
hello.age = 12;
hello.name = "hello";
console.log(hello);


// enums : 0, 1, ,2, 3, 4
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON
}

console.log(ResourceType.AUTHOR);


// & operator on 2 interfaces
interface Base1 {
  name: string;
  age: number;
}

interface Base2 {
  id: string,
  isMarried: boolean;
}

const mixedBase: Base1 & Base2 = {
  id: "3r23f0jewfewf",
  name: "xjy",
  age: 12,
  isMarried: false
};

console.log(mixedBase);