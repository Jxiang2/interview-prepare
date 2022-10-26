const omit = require("lodash/omit");

// The source object
var obj = {
  Name: "GeeksforGeeks",
  password: "gfg@1234",
  username: "your_geeks",
};

console.log(omit(obj));
