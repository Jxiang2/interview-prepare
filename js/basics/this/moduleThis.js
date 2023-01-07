module.exports.foo = 5;

console.log(this);
const f1 = () => {
  console.log(this);
};
function f2() {
  console.log(this);
}

f1(); // f1 does not has this, it uses the module.export = {foo: 5}  as it's this
f2(); // f2 has it's own scope "global", equivalent to global.f2()
