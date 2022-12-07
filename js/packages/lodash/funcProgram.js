const cond = require("lodash/cond");
const conforms = require("lodash/conforms");
const constant = require("lodash/constant");
const stubTrue = require("lodash/stubTrue");

const KIND = {
  SHORT: "short",
  EXPANDED: "expanded",
};

const matcher = cond([
  [
    conforms({
      employees: (employeeItems) => employeeItems?.length === 1,
    }),
    constant(KIND.EXPANDED),
  ],
  [stubTrue, constant(KIND.SHORT)],
]);

const testArea0 = {
  location: [{ id: 1 }, { id: 2 }, { id: 3 }],
  employees: [{ id: 1 }],
};
console.log(matcher(testArea0));

const testArea1 = {
  location: [{ id: 1 }, { id: 2 }, { id: 3 }],
  employees: [{ id: 1 }, { id: 2 }],
};
console.log(matcher(testArea1));

const testArea2 = {
  employees: [{ id: 1 }],
};
console.log(matcher(testArea2));

const testArea3 = {
  employees: [{ id: 1 }, { id: 2 }],
};
console.log(matcher(testArea3));
