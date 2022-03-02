/**
 * A peak element is an element that is strictly greater than it's neighbors
 * Given a integer array nums, find a peak and return it's index
 * If it containes multiple peaks, return index to any peak
 */

function findPeakElement (nums: number[]): number {
    let left: number = 0, right: number = nums.length - 1, mid: number;
    while (left < right) {
        mid = Math.floor((left + right) / 2);
        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else if (nums[mid] > nums[mid + 1]) {
            right = mid;
        }
    }
    return left;
}


findPeakElement([1, 4, 6, 5, 3, 7]);

// left: 3   right: 3    mid: 3
// 7        o
// 6      o
// 5         
// 4    o
// 3          o
// 2
// 1  o         o
// =================