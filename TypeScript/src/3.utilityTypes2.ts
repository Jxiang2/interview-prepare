// Parameters<Type>, ConstructorParameters<Type>, ReturnType<Type>
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
