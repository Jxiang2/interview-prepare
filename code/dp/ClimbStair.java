/**
 * classic stair climbing
 * find number of ways to climb n stairs
 */

package code.dp;

class ClimbStair {

    public int climbStairs(final int n) {
        if (n == 1)
            return 1;
        if (n == 2)
            return 2;
        final int[] dp = new int[n + 1];
        dp[1] = 1;
        dp[2] = 2;
        for (int i = 3; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp[n];
    }

}
