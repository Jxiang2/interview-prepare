const a = {
  name: "xjy",
  age: 23,
  ids: [1, 2, 3]
}

let b = { ...a }
b.ids = [1, 2]

console.log(a)
console.log(b)

console.log("###############")

b = a
b.ids = [1, 2]

console.log(a)
console.log(b)