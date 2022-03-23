const testClosure = () => {
    let a = 1;
    let b = 3;

    return () => {
        console.log(a * b);
    };
};

const test = testClosure();
test();