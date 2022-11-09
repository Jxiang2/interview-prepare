module.exports.foo = 5;

console.log(this);
const f1 = () => {
  console.log(this);
};
const f2 = function () {
  console.log(this);
};

f1(); // f1 does not has this, it uses the module as it's this
f2(); // f2 has it's own scope "global", which is auto-set when a function is created
