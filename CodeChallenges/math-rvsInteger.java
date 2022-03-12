package CodeChallenges;

class rvsInteger {

    int reverse(int x) {
        long rvsedInt = 0;

        while (x != 0) {
            rvsedInt = rvsedInt * 10 + x % 10;
            x = x / 10;
        }

        if (rvsedInt < Integer.MIN_VALUE || rvsedInt > Integer.MAX_VALUE)
            return 0;

        return (int) rvsedInt;
    }

}
