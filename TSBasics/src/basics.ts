// arrays
let characters: string[] = [];
characters.push('hello')
characters.push('world')
console.log('characters: ',characters);

// unions for multi-type variables
let mixed: (string|number)[] = []
mixed.push('hello')
mixed.push(20)
console.log('mixed:', mixed);

let uid: string|number
uid = 13
console.log(uid)
uid = '12345'
console.log(uid)

// objects
let ninjaOne: {
    name: string,
    age: number,
    belt: string
}

ninjaOne = {name: 'xjy', age: 22, belt: 'black'}
console.log(ninjaOne)

// functions
type StringOrNum = string | number
type objWithName = {name: string, uid: StringOrNum}

let greet: (user: objWithName) => void
let add: (a: number, b: number) => void
let minus: (a: number, b: number) => number

greet = (user: objWithName): void => {
    console.log(`${user.name} | ${user.uid}`);
}

greet({name: 'xjy', uid: 1537572})


add = (a: number, b: number, c: number | string = 20): void => {
    console.log(a+b+Number(c))
}

add(5, 10)

minus = (a: number, b: number): number => {
    return a-b
}

let result = minus(10, 7)
console.log(result)