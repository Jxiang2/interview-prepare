let obj = {
  name: "jxiang2",
  age: 23
}

// if obj is undefined, do not return undefined, instead, "name" and -1
const readObj = (obj) => `${obj?.name ?? "name"} ${obj?.age ?? -1}`

console.log(readObj())