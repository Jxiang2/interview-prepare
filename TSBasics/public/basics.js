"use strict";
// arrays
let characters = [];
characters.push('hello');
characters.push('world');
console.log('characters: ', characters);
// unions for multi-type variables
let mixed = [];
mixed.push('hello');
mixed.push(20);
console.log('mixed:', mixed);
let uid;
uid = 13;
console.log(uid);
uid = '12345';
console.log(uid);
// objects
let ninjaOne;
ninjaOne = { name: 'xjy', age: 22, belt: 'black' };
console.log(ninjaOne);
let greet;
let add;
let minus;
greet = (user) => {
    console.log(`${user.name} | ${user.uid}`);
};
greet({ name: 'xjy', uid: 1537572 });
add = (a, b, c = 20) => {
    console.log(a + b + Number(c));
};
add(5, 10);
minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7);
console.log(result);
