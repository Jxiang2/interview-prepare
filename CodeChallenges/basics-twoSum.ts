/**
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 * 
 * You may assume that each input would have exactly one 
 * solution, and you may not use the same element twice.
 * 
 * You can return the answer in any order.
 */

function twoSum (nums: number[], target: number): number[] {

    let pivot: number;

    for (let i: number = 0; i < nums.length; i++) {
        pivot = i;
        for (let j: number = i + 1; j < nums.length; j++) {
            if (nums[pivot] + nums[j] === target) {
                return [pivot, j];
            }
        }
    }
    return [-1];
};

// test cases
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([2, 7, 11, 15], 9));
