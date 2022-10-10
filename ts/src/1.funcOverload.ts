type CoordinateKey = "x" | "y";

interface Coordinate {
  x: number;
  y: number;
}

// optional type declarations **
function parseCoordinate(str: string): Coordinate;
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
// optional type declarations **

function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {} as Coordinate;

  if (typeof arg1 === "string") {
    (arg1 as string).split(",").forEach((str) => {
      const [k, v] = str.split(":");
      coord[k as CoordinateKey] = parseInt(v, 10);
    });
  } else if (typeof arg1 === "object") {
    coord = {
      ...(arg1 as Coordinate),
    };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord;
}

console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({ x: 52, y: 35 }));
console.log(parseCoordinate("x:12,y:22"));

export {
  parseCoordinate,
};
