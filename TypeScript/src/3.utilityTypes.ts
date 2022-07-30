// PART 1: Partial<T>, Required<T>, Pick<T>, Record<K, V>, ReadOnly<T>
interface MyUser {
  name: string,
  id: string,
  emial?: string;
}


// Partial<T>: take a type (interface) T, make it's all attributes optional
const mergeOptional = (user: MyUser, overrides: Partial<MyUser>): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(mergeOptional({
  name: "xjy",
  id: "foo",
  emial: "xxx.xxx@xx.com"
}, {
  id: "deee",
  name: "jxiang",
}));


// Required<T>: take a type (interface) T, make it's all attrubutes required
const mergeRequired = (user: MyUser, overrides: Required<MyUser>): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(mergeRequired({
  name: "xjy",
  id: "foo",
  emial: "xxx.xxx@xx.com"
}, {
  id: "deee",
  name: "jxiang",
  emial: "jxiang2@mcgill.ca"
}));


// Pick<T, Keys>: take a type (interface) T, Pick the selected keys using | operator, 
// the requiredness of original attributes will be restored
type JustEmailAndName = Pick<MyUser, "emial" | "name">;
const meMe: JustEmailAndName = {
  name: "xjy",
};
console.log(meMe);

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
};
type Point2D = MyPick<{ x: number, y: number, z: number; }, "x" | "z">;


// Record<string, MyUser>
const mapById = (users: MyUser[]): Record<string, MyUser> => {
  return users.reduce((acc, cur) => {
    return {
      ...acc,
      [cur.id]: cur
    };
  }, {});
};

const idMap: Record<string, MyUser> = mapById([
  { id: "foo", name: "Mr. Foo" },
  { id: "baz", name: "Mr. Baz" },
]);

console.log(idMap);


// ReadOnly<T>
interface Cat {
  name: string,
  breed: string;
}

const rc: Readonly<Cat> = {
  name: "dingding",
  breed: "teddy bear"
};
// rc.name = 'cwec';


// PART 2: Parameters<Type>, ConstructorParameters<Type>, ReturnType<Type>, InstanceType<T>
type Name = {
  first: string,
  last: string;
};


// Parameters<Type> & ReturnType<Type>
function addFullName(name: Name): Name & { fullName: string; } {
  return {
    ...name,
    fullName: `${name.first} ${name.last}`
  };
}

function permuteRows<T extends (...args: any[]) => any>( // typpe of generic func
  iteratorFunc: T,
  data: Array<Parameters<T>[0]>
): ReturnType<T>[] {
  return data.map(iteratorFunc);
}

console.log(permuteRows(addFullName, [
  { first: "1", last: "1" },
  { first: "2", last: "2" },
  { first: "3", last: "3" },
]));


// ConstructorParameters<Type> & InstanceType<T>
class PersonWithFullName {
  constructor (public name: Name) { }

  get fullName() {
    return `${this.name.first} ${this.name.last}`;
  }
}

function createObjects<T extends new (...args: any[]) => any>( // typpe of generic constructors
  objectType: T, data: ConstructorParameters<T>[0][]
): Array<InstanceType<T>> {
  return data.map(item => new objectType(item));
}

console.log(createObjects(PersonWithFullName, [
  { first: "1", last: "1" },
  { first: "2", last: "2" },
  { first: "3", last: "3" },
]).map(obj => obj.fullName));
