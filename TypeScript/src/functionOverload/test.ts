import { houses } from "./houses";
import { findHouses } from "./index";

console.log(houses);

console.log(findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides"));

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));