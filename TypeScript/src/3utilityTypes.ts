// 4 important utility types: Partial<T>, Required<T>, Pick<T>, Record<K, V>

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
