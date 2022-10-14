// use splice to perform insert, delete
// and replace a specific element
// arg0: index of operation
// arg1: how many elements to remove, 0 to not remove
// arg2: replacement at index of operation
const testAry = ["-3", "-1", "1", "3", "5", "7", "9"];

// insert "0" at index 1
testAry.splice(1, 0, "0");
console.log(testAry);

// remove element at postion 1
testAry.splice(testAry.indexOf("0"), 1);
console.log(testAry);

// replace the last element with "999999999"
testAry.splice(-1, 1, "999999999");
console.log(testAry);
