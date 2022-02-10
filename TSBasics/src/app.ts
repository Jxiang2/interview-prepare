let characters: string[] = [];
characters.push('hello')
characters.push('world')
console.log('characters: ',characters);

let mixed: (string|number)[] = []
mixed.push('hello')
mixed.push(20)
console.log('mixed:', mixed);

let uid: string|number
uid = 13
console.log(uid)
uid = '12345'
console.log(uid)

let ninjaOne: {
    name: string,
    age: number,
    belt: string
}

ninjaOne = {name: 'xjy', age: 22, belt: 'black'}
console.log(ninjaOne)


const circ = (diameter: number) => {
    return diameter * Math.PI
}

console.log(circ(15))