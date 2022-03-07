/**
 * Given a signed 32-bit integer x, return x with 
 * its digits reversed. If reversing x causes the 
 * value to go outside the signed 32-bit integer 
 * range [-2^31, 2^31 - 1], then return 0.
 */

function reverse (x: number): number {

    let reversedInt = 0;
    while (x != 0) {
        reversedInt = reversedInt * 10 + x % 10;
        x = parseInt(String(x / 10));
    }

    if (reversedInt < -Math.pow(2, 31) || reversedInt > Math.pow(2, 31)) return 0;

    return reversedInt;
};

console.log(reverse(-123));