/**
 * Given an integer array nums, return the length of the 
 * longest strictly increasing subsequence.
 * 
 * Input: nums = [10,9,2,5,3,7,101,18]
 * Output: 4
 * Explanation: The longest increasing subsequence is [2,3,7,101],
 *  therefore the length is 4.
 */

function lengthOfLIS (nums: number[]): number {
    let dp = new Array(nums.length).fill(1);
    let prevs = new Array(nums.length).fill(-1);
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
                prevs[i] = j;
            }
        }
    }
    console.log(prevs);
    return Math.max(...dp);
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));