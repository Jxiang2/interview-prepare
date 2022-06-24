// interfaces
interface House {
  name: string;
  planets: string | Array<string>;
}

interface HouseWithID extends House {
  id: number;
}

// function declarations
export function findHouses(
  houses: string | Array<House>,
  filter?: (house: House) => boolean
): HouseWithID[];

// function implementation
export function findHouses(
  input: string | Array<House>,
  filter?: (house: House) => boolean
) {
  const houses: Array<House> = (typeof input === "string") ? JSON.parse(input) : input;

  return (filter ? houses.filter(filter) : houses)
    .map((house) => ({
      id: houses.indexOf(house),
      ...house
    }));
}

