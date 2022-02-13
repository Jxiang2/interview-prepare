console.log("the window: ", this)

console.log("####");
// array iterations
const gList = ["one","two","three","four","five"]
for (let [index, item] of gList.entries()) {
    console.log(`${index} - ${item}`)
};

// object key: string or number ; value: anything
const profile = {
    name: "john",
    age: 13,
    single: true,
    friends: [
        {
            name: "joe",
            age: 15,
            single: true
        }, {
            name: "joe",
            age: 15,
            single: true
        }
    ]
};
for (let prop in profile) {
    console.log(`${prop} - ${profile[prop]}`);
}

// destruct object (get the attributes)
const obj = {x:1, y:2}
let {x, y} = obj
console.log(x);
console.log(y);
console.log("####");


console.log("####");
// rest operator
let add = function(div, ...nums) {
    console.log(nums);
    let sum = 0;
    for (let i=0; i<nums.length; i++) {
        sum += nums[i]
    }
    return sum/div;
}
let sum = add(2, 1,2,3)
console.log((sum));
console.log("####");


console.log("####");
// functional constructor
const Car = function(color) {
    this._color = color;
};
// class method for Car 
Car.prototype.getColor = function() {
    return this._color;
}
// another functional constructor
const ToyCar = function(color, model) {
    // inherit color from Car
    Car.call(this, color);
    this._model = model;
}
// set class ToyCar to be child class of Car by prototypal inheritence
ToyCar.prototype = Object.create(Car.prototype);
// class method for ToyCar
ToyCar.prototype.getModel = function() {
    return this._model;
}
const speedyBlue = new ToyCar('blue', 'speedy');
console.dir(speedyBlue);
console.log(speedyBlue.getModel());
console.log(speedyBlue.getColor());
// js class is syntatic suger
console.log("####");


console.log("####");
// Closure, use arrow function while using Closure!
const xNew = () => {
    let i = 0;
    const returnX = () => {
        console.log(i)
    };
    return {
        "returnX": returnX
    }
};
xNew().returnX()
console.log("####");


console.log("####");
// map & filter => retrun new ary based on original ary
// original ary is not mutated
const ninjas = [
    {name: "shaun", belt: "black"},
    {name: "mario", belt: "orange"},
    {name: "yoshi", belt: "black"},
    {name: "luigi", belt: "green"}
]

const blackBeltNinjas = ninjas.filter(
    (ninja) => {return ninja.belt == "black";}
)
console.log(blackBeltNinjas);

const names = ninjas.map(
    (ninja) => {return ninja.name}
)
console.log(names)

console.log(ninjas)




