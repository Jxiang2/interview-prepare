// check if 2 arries are equal
const arr1 = [1, 2, 3, 4, 5, "hello"];
const arr2 = [1, 2, 3, 4, 5, "hello"];

console.log(arr2.includes("5"));
console.log(JSON.stringify(arr1) === JSON.stringify(arr2));

// check if 2 objects are equal
const obj1 = {
  name: "xjy",
  age: 23,
};
const obj2 = {
  name: "xjy",
  age: 23,
};

function objectsEqual(o1, o2) {
  if (Object.keys(o1).length !== Object.keys(o2).length) {
    return false;
  }
  for (const char in o1) {
    if (o1[char] !== o2[char]) {
      return false;
    }
  }
  return true;
}

console.log(objectsEqual(obj1, obj2));

// check object length
const obj3 = {
  property1: 1,
  property2: 2,
  property3: 3,
};
console.log(Object.keys(obj3).length);

// check if 2 objects have the same keys
const obj4 = {
  p2: "5",
  p1: 1,
  p3: 3,
};
const obj5 = {
  p1: 1,
  p2: 6,
  p3: "3",
};

function disorderedEqual(array1, array2) {
  if (array1.length === array2.length) {
    return array1.every((element) => !!array2.includes(element));
  }
  return false;
}

console.log(disorderedEqual(Object.keys(obj4), Object.keys(obj5)));
