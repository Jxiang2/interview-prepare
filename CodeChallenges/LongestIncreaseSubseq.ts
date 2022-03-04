/**
 * Given an integer array nums, return the length of the 
 * longest strictly increasing subsequence.
 * 
 * For example, [3,6,2,7] is a subsequence of 
 * the array [0,3,1,6,2,2,7].
 */

function lengthOfLIS (nums: number[]): number {

    if (nums.length < 1) return -1;

    // each index store lengths of subsequences ended at nums[index]
    let dp = new Array(nums.length).fill(1);

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > nums[i]) {
                dp[j] = Math.max(nums[j], nums[i] + 1);
            }
        }
    }
    return Math.max(...dp);
};

console.log(lengthOfLIS([1, 2, 4, 2, 4, 5, 9, 2, 10]));