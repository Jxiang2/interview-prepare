class Square {
  constructor(width) {
    // params of constructors are passed from outside
    this.width = width;
    this.height = width;
  }

  // getter
  get area() {
    this.number++;
    return this.width * this.height;
  }

  // setter
  set area(area) {
    this.width = Math.sqrt(area);
    this.height = this.width;
  }

  // static(prototype) method, no 'this' bound to static methods
  static areaEquals = (sq1, sq2) =>
    sq1.width * sq1.height === sq2.width * sq2.height;

  static isValidDimensions = (width, height) => width === height;
}

class ColorSquare extends Square {
  constructor(width, color) {
    super(width);
    this.color = color;
  }

  sayHi = () => {
    console.log(
      `I am a ${this.color} squre, with area ${this.width} * ${this.height} = ${this.area}`,
    );
  };
}

const cq1 = new ColorSquare(6, "blue");
const cq2 = new ColorSquare(6, "red");
console.log(cq1 === cq2);
cq1.sayHi();
cq2.sayHi();
console.log(Square.areaEquals(cq1, cq2));
