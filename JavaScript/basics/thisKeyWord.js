/*
- implicit binding 1
- Explict binding 2
- new binding 3
- window binding 4
- class & obj & func unbound cases 5
- excercises
*/


// implicit binding, this =
// Left of the Dot at the call time
let me = {
    name: 'Tyler',
    age: 25,
    sayName: function () {
        console.log(this)
    }
}
me.sayName() // -> me

let Person = function (name, age) {
    return {
        name: name,
        age: age,
        sayName: function () {
            console.log(this.name)
        },
        mother: {
            name: "Stacey",
            sayName: function () {
                console.log(this.name)
            }
        }
    }
}

let jim = Person('Jim', 42)
jim.sayName() // -> Jim
jim.mother.sayName() // -> Stacey

console.log("#############################################")

// explict binding: call, apply, bind
let sayName = function () {
    console.log(this.name)
}

var stacey = {
    name: "Stacey",
    age: 34
}
// stacy obj invokes sayName
sayName.call(stacey) // -> Stacey
let boundFunction = sayName.bind(stacey)
console.log("now the function sayName is bound to variable boundFunction")
boundFunction()

console.log("#############################################")

// new binding, js create a new empty obj when creating a new obj using new keyword
let Animal = function (color, name, type) {
    console.log(this)
    this.color = color
    this.name = name
    this.type = type

    this.getAttributes = function () {
        console.log(this)
    }
}

let zebra = new Animal('black and white', 'zorro', 'zebra')
zebra.getAttributes()

console.log("#############################################")

// window binding, this keyword is default to the window obj
let sayAge = function () {
    console.log(this.age)
}

let me2 = {
    age: 25
}

sayAge()
globalThis.age = 35
sayAge()

console.log("#############################################")

// class & obj & func unbound cases
class NewClassC {
    playGame () {
        console.log("class-based constructor: ", this)
    }
}
let pgc = new NewClassC() // -> empty obj, has no property "playGame"
console.log(pgc)
let var1 = pgc.playGame
var1() // -> undefiend

function NewClassF () {
    this.playGame = function () {
        console.log("function-based constructor: ", this)
    }
}
let pgf = new NewClassF() // -> not a empty obj!, has property "playGame"
console.log(pgf)
let var2 = pgf.playGame
var2() // -> undefiend

let newClassO = {
    playGame () {
        console.log("object constructor: ", this)
    }
}
console.log(newClassO)
let var3 = newClassO.playGame
var3()

console.log("#############################################")

// excercises
// this: object that is excuting the current function/ method
// arrow function always bind to global object
const getArgs = (...x) => {
    console.log("this in arrow function: ", this)
    console.log(x)
}
getArgs(1, 2, 3, 4, 5)

// this example 1
const thisProfile = {
    myName: "john",
    childern: [{
        myName: "peter",
        getName () {
            return this
        }
    }],
    getName () {
        return this
    }
}
console.log(thisProfile.getName()) // -> obj thisProfile
// pass the function reference of getName to another variable
const getNameLoose = thisProfile.getName
// undefined, since getName is loosely connected to GetArgs
console.log(getNameLoose()) // -> Window
console.log(getNameLoose.call(thisProfile)) // -> thisProfile

// this example 2 (this of anonymous function is undefined)
class Bear {
    scratch () {
        console.log(this)
        let innerfunction = function () {

            console.log("inner function this: ", this)
        }
        return innerfunction
    }
}
polarBear = new Bear()
let itch = polarBear.scratch() // -> anoymous function
itch() // -> undefined
itch.call(Bear)
