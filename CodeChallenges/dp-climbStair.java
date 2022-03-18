package CodeChallenges;

class ClimbStair {

    public int climbStair(int n) {
        int[] dp = new int[n + 1];
        // n = 5, n + 1 = 6
        // dp : [x, x, x, x, x, x]

        dp[1] = 1;
        dp[2] = 2;

        for (int i = 3; i < n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }

        return dp[n];
    }

}
