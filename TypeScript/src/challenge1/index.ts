import houses from "./houses.json";

// interfaces
interface House {
  name: string;
  planets: string | Array<string>;
}

interface HouseWithID extends House {
  id: number;
}

// function declarations
function findHouses (
  houses: string | House[],
  filter?: (house: House) => boolean
): HouseWithID[];

// function implementation
function findHouses (
  input: string | House[],
  filter?: (house: House) => boolean
) {
  const houses: House[] = (typeof input === "string") ? JSON.parse(input) : input;

  return (filter ? houses.filter(filter) : houses)
    .map((house) => ({
      id: houses.indexOf(house),
      ...house
    }));
}

console.log(findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides"));

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));