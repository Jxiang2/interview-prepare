/**
 * Given a signed 32-bit integer x, return x with 
 * its digits reversed. If reversing x causes the 
 * value to go outside the signed 32-bit integer 
 * range [-231, 231 - 1], then return 0.
 */

function reverse (x: number): number {

    let reversedInt = 0;
    while (x != 0) {
        reversedInt = reversedInt * 10 + x % 10;
        x = parseInt(String(x / 10));
    }
    return reversedInt;
};

console.log(reverse(-123));