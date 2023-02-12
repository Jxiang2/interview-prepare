/**
 * Input: nums = [10,9,2,5,3,7,101,18]
 * Output: 4
 * Explanation: The longest increasing subsequence is [2,3,7,101],
 *  therefore the length is 4.
 */

package code.dp;

import java.util.Arrays;

class LongestIncSubseq {
    /*
     * Recurence: dp[i] = max{dp[i-1] + 1, dp[i]} if nums[j] < nums[i]
     */
    public int lengthOfLIS(final int[] nums) {
        final int[] dp = new int[nums.length];
        Arrays.fill(dp, 1);

        for (int i = 0; i < nums.length; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[j] < nums[i]) {
                    dp[i] = Math.max(dp[i], 1 + dp[j]);
                }
            }
        }

        int max = dp[0];
        for (int i = 0; i < dp.length; i++) {
            if (dp[i] > max)
                max = dp[i];
        }
        return max;
    }
}