/**
 * You are a professional robber planning to rob houses along 
 * a street/ arranged in a circle. Each house has a certain 
 * amount of money stashed, the only constraint stopping you 
 * from robbing each of them is that adjacent houses have security 
 * systems connected and it will automatically contact the police if two adjacent 
 * houses were broken into on the same night.
 * 
 * Given an integer array nums representing the amount of money of 
 * each house, return the maximum amount of money you can rob tonight
 */

package code.dp;

class HouseRobber {
    public int rob(int[] nums) {
        int n = nums.length;
        int[] dp = new int[n];
        dp[0] = nums[0];

        if (n == 1)
            return nums[0];

        dp[1] = Math.max(nums[0], nums[1]);

        for (int i = 2; i < n; i++) {
            dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
        }

        return dp[n - 1];
    }

    public int circularRob(int[] nums) {
        int n = nums.length;
        if (n == 0)
            return 0;
        if (n == 1)
            return nums[0];

        // set two dp arrays
        // dp--> the 0th element is used
        // dp2 --> the 0th element is not used
        int[] dp = new int[n];
        int[] dp2 = new int[n];

        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);

        // pretend first element is not used by initilize it as -1
        dp2[0] = 0;
        dp2[1] = nums[1];

        for (int i = 2; i < n; i++) {
            dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
            dp2[i] = Math.max(dp2[i - 2] + nums[i], dp2[i - 1]);
        }
        // for dp[] if we use the first element, the last element cnanot be used,
        // so the largest profit is max(dp[n-2],dp2[n-1])

        return Math.max(dp[n - 2], dp2[n - 1]);
    }
}
