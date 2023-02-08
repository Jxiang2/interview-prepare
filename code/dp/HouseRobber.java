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

import java.util.HashMap;
import java.util.Map;

class HouseRobber {
    public int robMemo(final int[] nums) {
        return solveRob(nums, nums.length - 1, new HashMap<>());
    }

    /*
     * nums = [7, 4, 1, 9, 3, 8, 6, 5]
     * Street1 = [7, 4, 1, 9, 3, 8, 6]
     * Street2 = [4, 1, 9, 3, 8, 6, 5]
     */
    public int circularRobMemo(final int[] nums) {
        if (nums.length == 1) // to avoid path1 or path2 to be empty
            return nums[0];

        final int[] path1 = new int[nums.length - 1];
        final int[] path2 = new int[nums.length - 1];

        for (int i = 0; i < nums.length - 1; i++)
            path1[i] = nums[i];

        for (int i = 1; i < nums.length; i++)
            path2[i - 1] = nums[i];

        final int current = path1.length - 1;
        final int path1Result = solveRob(path1, current, new HashMap<>());
        final int path2Result = solveRob(path2, current, new HashMap<>());
        return Math.max(path1Result, path2Result);
    }

    private int solveRob(
            final int[] nums,
            final int current,
            final Map<Integer, Integer> memo) {
        if (memo.containsKey(current))
            return memo.get(current);

        if (current < 0)
            return 0;

        final int subAmount = Math.max(
                solveRob(nums, current - 2, memo) + nums[current],
                solveRob(nums, current - 1, memo));
        memo.put(current, subAmount);
        return memo.get(current);
    }

    public static void main(final String[] args) {
        final HouseRobber solution = new HouseRobber();
        System.out.println(solution.circularRobMemo(new int[] { 1, 2, 3, 1 }));
    }
}
