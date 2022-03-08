/**
 * Implement the myAtoi(string s) function, which converts a 
 * string to a 32 - bit signed integer
 * (similar to C / C++'s atoi function).
 */



function myAtoi (s: string): number {
    let num = 0;
    let parsedS = (s ? s.trim().split(' ') : '');
    num = parseInt(parsedS[0]) || 0;

    const intConstraint = Math.pow(2, 31);
    if (num < -intConstraint) {
        num = -intConstraint;
    } else if (num > (intConstraint - 1)) {
        num = intConstraint - 1;
    }

    return num;
};

console.log(myAtoi("  nuq-w  qd123dwqdqw"));

