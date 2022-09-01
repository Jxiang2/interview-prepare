class Bear {
  constructor() { }

  scratch() {
    console.log(this)
    const innerfunction = function () {
      console.log('inner function this: ', this) // global does not have property
    }
    return innerfunction
  }
}


let itch = new Bear().scratch() // -> anoymous function
itch() // -> undefined
itch.call(Bear)