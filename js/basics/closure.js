const testClosure = () => {
  const a = 1;
  const b = 3;

  return () => {
    console.log(a * b);
  };
};

const test = testClosure();
test();
