/**
Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, 
and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function 
or operator, such as pow(x, 0.5) or x ** 0.5.
 */

package code;

class Sqrt {
    public int mySqrt(int x) {
        long l = 0;
        long r = x;
        while (l <= r) {
            long mid = (l + r) / 2;
            long guess = mid * mid;
            if (guess > x) {
                r = mid - 1;
            } else if (guess < x) {
                l = mid + 1;
            } else {
                return (int) mid;
            }
        }
        return (int) r;
    }
}
