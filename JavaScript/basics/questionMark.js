// single question mark ? will return undefined if the thing behind it does not exist
// arg ?? default will return default if arg is undefined or null

let me = {
  name: 'jxiang2',
  age: 23,
}

// if obj is undefined, do not return undefined, instead, "name" and -1
const readObj = (obj) => `${obj?.namex ?? 'name'} ${obj?.age ?? -1}`

console.log(readObj(me))