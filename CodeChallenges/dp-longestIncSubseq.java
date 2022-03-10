package CodeChallenges;

import java.util.Arrays;

class LongestIncSubseq {
    public String lengthOfLIS(int[] nums) {
        int[] dp = new int[nums.length];
        Arrays.fill(dp, 1);

        for (int i = 0; i < nums.length; i++) {
            for (int j = 0; j < nums.length; j++) {
                if (nums[j] < nums[i]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
        }
        return Arrays.toString(dp);
    }
}

class RunLongestIncSubseq {
    public static void main(String[] args) {
        LongestIncSubseq sol = new LongestIncSubseq();
        String res = sol.lengthOfLIS(new int[] { 10, 9, 2, 5, 3, 7, 101, 18 });
        System.out.println(res);
    }
}