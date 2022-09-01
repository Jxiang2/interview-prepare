// knowledge checkpoint: TS generics, TS type conversion, reduce((acc, v)=>{...do sth}, initAcc)
// use reduce method to simulate others

function myForEach<T>(items: T[], forEachFunc: (v: T) => void): void {
  items.reduce((acc, v) => {
    forEachFunc(v);
    return undefined;
  }, undefined);
}

console.log(myForEach([1, 2, 3, 4, 5], (v) => console.log(`for each ${v}`)));


function myFilter<T>(items: T[], filterFunc: (v: T) => boolean): T[] {
  return items.reduce((a, v) => (filterFunc(v) ? [...a, v] : a), [] as T[]);
}

console.log(myFilter([1, 2, 3, 4, 5, 6, 7], (v) => v % 2 === 0));


function myMap<T, K>(values: T[], mapFunc: (val: T) => K): K[] {
  return values.reduce((a, v) => [...a, mapFunc(v)], [] as K[]);
}

console.log(myMap([1, 2, 3], (val) => (val * 10).toString()));
