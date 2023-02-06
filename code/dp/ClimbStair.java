/**
 * classic stair climbing, climb either 1 or 2 steps each time
 * find number of ways to climb n stairs
 */

package code.dp;

import java.util.HashMap;
import java.util.Map;

class ClimbStair {

    public int climbStairsTab(final int n) {
        if (n == 0)
            return 0;
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

    public int climbStairsMemo(final int n, final Map<Integer, Integer> memo) {
        if (memo.containsKey(n))
            return memo.get(n);

        if (n == 0)
            return 0;
        if (n == 1)
            return 1;
        if (n == 2)
            return 2;

        final int subWays = climbStairsMemo(n - 1, memo) + climbStairsMemo(n - 2, memo);
        memo.put(n, subWays);
        return memo.get(n);
    }

    public static void main(final String[] args) {
        final ClimbStair solution = new ClimbStair();
        solution.climbStairsMemo(10, new HashMap<>());
    }

}
