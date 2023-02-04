/**
 * 
A peak element is an element that is strictly greater than its neighbors.

Given an integer array nums, find a peak element, and return its index. 
If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞.

You must write an algorithm that runs in O(log n) time.
 */

package code.bs;

class FindPeaks {
    public int findPeakElement(final int[] nums) {
        int l = 0, r = nums.length - 1;
        int mid;

        while (l < r) {
            mid = (l + r) / 2;
            if (nums[mid] < nums[mid + 1]) {
                l = mid + 1;
            } else if (nums[mid] > nums[mid + 1]) {
                r = mid;
            }
        }

        return l;
    }

    public static void main(final String[] args) {
        final FindPeaks sol = new FindPeaks();
        final int res = sol.findPeakElement(new int[] { 5, 7, 7, 8, 8, 10 });
        System.out.println(res);
    }
}