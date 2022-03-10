package CodeChallenges;

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
