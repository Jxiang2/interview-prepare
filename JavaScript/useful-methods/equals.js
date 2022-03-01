// check if 2 arries are equal
const arr1 = [ 1, 2, 3, 4, 5, "hello" ];
const arr2 = [ 1, 2, 3, 4, 5, "hello" ];

console.log( arr2.includes( "5" ) );

console.log( JSON.stringify( arr1 ) === JSON.stringify( arr2 ) );

// check if 2 objects are equal
const obj1 = {
	name: "xjy",
	age: 23,
};
const obj2 = {
	name: "xjy",
	age: 23,
};
console.log( JSON.stringify( obj1 ) === JSON.stringify( obj2 ) );

// check object length
const obj3 = {
	property1: 1,
	property2: 2,
	property3: 3,
};
console.log( Object.keys( obj3 ).length );

// check if 2 objects have the same keys
const obj4 = {
	p1: 1,
	p2: "5",
	p3: 3,
};
const obj5 = {
	p1: 1,
	p2: 6,
	p3: "3",
};
console.log( JSON.stringify( Object.keys( obj4 ) ) === JSON.stringify( Object.keys( obj5 ) ) );
